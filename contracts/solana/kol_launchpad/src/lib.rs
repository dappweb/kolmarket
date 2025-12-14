use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer, MintTo};

declare_id!("KOLLaunchpad1111111111111111111111111111111");

#[program]
pub mod kol_launchpad {
    use super::*;

    // 初始化新的 Bonding Curve 市场
    pub fn create_market(ctx: Context<CreateMarket>, name: String, symbol: String) -> Result<()> {
        let curve_config = &mut ctx.accounts.curve_config;
        curve_config.creator = ctx.accounts.creator.key();
        curve_config.token_mint = ctx.accounts.token_mint.key();
        curve_config.token_vault = ctx.accounts.token_vault.key();
        curve_config.sol_vault = ctx.accounts.sol_vault.key();
        
        // 初始参数设定 (示例值)
        // 假设虚拟储备使得初始价格非常低，但保证有流动性
        curve_config.virtual_sol_reserves = 1_000_000_000; // 1 SOL (in lamports)
        curve_config.virtual_token_reserves = 1_000_000_000_000_000; // 1B tokens (decimals 6)
        curve_config.real_sol_reserves = 0;
        curve_config.total_supply = 1_000_000_000_000_000;
        curve_config.graduated = false;
        curve_config.bump = *ctx.bumps.get("curve_config").unwrap();

        // 铸造总供应量到 Vault
        let cpi_accounts = MintTo {
            mint: ctx.accounts.token_mint.to_account_info(),
            to: ctx.accounts.token_vault.to_account_info(),
            authority: ctx.accounts.curve_config.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let seeds = &[
            b"curve".as_ref(),
            ctx.accounts.token_mint.key().as_ref(),
            &[curve_config.bump],
        ];
        let signer = &[&seeds[..]];
        let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer);
        token::mint_to(cpi_ctx, curve_config.total_supply)?;

        msg!("Market created for {} ({})", name, symbol);
        Ok(())
    }

    // 购买代币
    pub fn buy(ctx: Context<Buy>, amount_in: u64) -> Result<()> {
        let curve = &mut ctx.accounts.curve_config;
        
        // 1. 计算价格 (Bonding Curve Logic: Constant Product or Linear)
        // k = x * y (简化版 XYK)
        // amount_out = y - (k / (x + amount_in))
        let k = (curve.virtual_sol_reserves as u128) * (curve.virtual_token_reserves as u128);
        let new_sol_reserves = (curve.virtual_sol_reserves as u128) + (amount_in as u128);
        let new_token_reserves = k / new_sol_reserves;
        let amount_out = (curve.virtual_token_reserves as u128) - new_token_reserves;
        
        // 2. 转移 SOL (User -> Curve Vault)
        // 此处简化，实际需通过 System Program Transfer
        
        // 3. 转移 Token (Curve Vault -> User)
        let seeds = &[
            b"curve".as_ref(),
            curve.token_mint.as_ref(),
            &[curve.bump],
        ];
        let signer = &[&seeds[..]];

        let transfer_accounts = Transfer {
            from: ctx.accounts.token_vault.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.curve_config.to_account_info(),
        };
        let cpi_ctx = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            transfer_accounts,
            signer
        );
        token::transfer(cpi_ctx, amount_out as u64)?;

        // 4. 更新状态
        curve.virtual_sol_reserves += amount_in;
        curve.real_sol_reserves += amount_in;
        curve.virtual_token_reserves -= amount_out as u64;

        // 5. 检查是否达到毕业条件 (如市值达标)
        if curve.real_sol_reserves >= 85_000_000_000 { // 85 SOL 示例
             // 触发 graduate 逻辑 (需单独指令或在此 CPI 调用)
             msg!("Market ready to graduate!");
        }

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateMarket<'info> {
    #[account(mut)]
    pub creator: Signer<'info>,
    
    // 初始化 Curve 状态账户
    #[account(
        init,
        payer = creator,
        space = 8 + 32 + 32 + 32 + 32 + 8 + 8 + 8 + 8 + 1 + 1,
        seeds = [b"curve", token_mint.key().as_ref()],
        bump
    )]
    pub curve_config: Account<'info, CurveState>,

    // Token Mint (需在外部由用户或合约创建)
    #[account(mut)]
    pub token_mint: Account<'info, Mint>,

    // 存放代币的 Vault
    #[account(
        init,
        payer = creator,
        token::mint = token_mint,
        token::authority = curve_config,
        seeds = [b"token_vault", token_mint.key().as_ref()],
        bump
    )]
    pub token_vault: Account<'info, TokenAccount>,

    // 存放 SOL 的 Vault (System Account PDA)
    /// CHECK: Safe because seeds are checked
    #[account(
        mut,
        seeds = [b"sol_vault", token_mint.key().as_ref()],
        bump
    )]
    pub sol_vault: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct Buy<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    
    #[account(
        mut,
        seeds = [b"curve", curve_config.token_mint.key().as_ref()],
        bump = curve_config.bump
    )]
    pub curve_config: Account<'info, CurveState>,

    #[account(
        mut,
        seeds = [b"token_vault", curve_config.token_mint.key().as_ref()],
        bump
    )]
    pub token_vault: Account<'info, TokenAccount>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct CurveState {
    pub creator: Pubkey,
    pub token_mint: Pubkey,
    pub token_vault: Pubkey,
    pub sol_vault: Pubkey,
    pub virtual_sol_reserves: u64,
    pub virtual_token_reserves: u64,
    pub real_sol_reserves: u64,
    pub total_supply: u64,
    pub graduated: bool,
    pub bump: u8,
}
