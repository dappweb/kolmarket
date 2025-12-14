use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token, TokenAccount};

declare_id!("KOLAgentRegistry111111111111111111111111111");

#[program]
pub mod kol_agent_registry {
    use super::*;

    // 注册 Agent
    pub fn register_agent(ctx: Context<RegisterAgent>, name: String) -> Result<()> {
        let agent_profile = &mut ctx.accounts.agent_profile;
        agent_profile.authority = ctx.accounts.authority.key();
        agent_profile.kol_token_mint = ctx.accounts.kol_token_mint.key();
        agent_profile.total_earnings = 0;
        agent_profile.reputation_score = 0;
        agent_profile.tasks_completed = 0;
        agent_profile.name = name;
        agent_profile.bump = *ctx.bumps.get("agent_profile").unwrap();
        
        msg!("Agent {} registered successfully", agent_profile.name);
        Ok(())
    }

    // 更新 Agent 状态 (通常由 Oracle 或后端签名者调用)
    pub fn update_stats(ctx: Context<UpdateStats>, score_delta: i64, tasks_delta: u64) -> Result<()> {
        let agent = &mut ctx.accounts.agent_profile;
        
        if score_delta > 0 {
            agent.reputation_score += score_delta as u64;
        } else {
            agent.reputation_score = agent.reputation_score.saturating_sub((-score_delta) as u64);
        }
        
        agent.tasks_completed += tasks_delta;
        Ok(())
    }

    // 提取收益并执行回购逻辑 (模拟)
    pub fn distribute_revenue(ctx: Context<DistributeRevenue>, amount: u64) -> Result<()> {
        let agent = &mut ctx.accounts.agent_profile;
        
        // 1. 验证 PDA 余额
        // ...
        
        // 2. 分账逻辑
        // 80% Buyback (swap SOL -> KOL Token -> Burn)
        // 10% Agent Owner
        // 10% Protocol Fee
        
        let buyback_amount = amount * 80 / 100;
        let owner_amount = amount * 10 / 100;
        let protocol_amount = amount - buyback_amount - owner_amount;

        msg!("Distributing: Buyback={}, Owner={}, Protocol={}", buyback_amount, owner_amount, protocol_amount);
        
        // 此处应调用 CPI 执行 Raydium Swap 和 Transfer
        
        agent.total_earnings += amount;
        
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct RegisterAgent<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(mut)]
    pub kol_token_mint: Account<'info, Mint>,

    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 32 + 8 + 8 + 8 + 32 + 1,
        seeds = [b"agent", authority.key().as_ref(), kol_token_mint.key().as_ref()],
        bump
    )]
    pub agent_profile: Account<'info, AgentProfile>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateStats<'info> {
    #[account(mut)]
    pub authority: Signer<'info>, // 应当是 Oracle 或 Admin Key

    #[account(mut, has_one = authority)] // 简单鉴权
    pub agent_profile: Account<'info, AgentProfile>,
}

#[derive(Accounts)]
pub struct DistributeRevenue<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(mut)]
    pub agent_profile: Account<'info, AgentProfile>,
    
    // 接收 SOL 的 Agent Vault PDA
    /// CHECK: Seeds checked
    #[account(mut, seeds = [b"agent_vault", agent_profile.key().as_ref()], bump)]
    pub agent_vault: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AgentProfile {
    pub authority: Pubkey,
    pub kol_token_mint: Pubkey,
    pub total_earnings: u64,
    pub reputation_score: u64,
    pub tasks_completed: u64,
    pub name: String,
    pub bump: u8,
}
