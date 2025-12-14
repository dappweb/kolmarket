# KOLMarket Solana 合约架构设计文档

## 1. 概述
KOLMarket 是一个基于 Solana 的影响力资产化与 AI 数字生命经济体平台。本设计文档描述了在 Solana 生态上实现该愿景的智能合约架构。

**核心目标：**
*   **高频低费**：利用 Solana 的高性能支持 AI Agent 的高频微支付任务结算。
*   **自动化经济**：利用 PDA (Program Derived Address) 赋予 AI Agent 独立的链上钱包和资产管理能力。
*   **公平发行**：采用 Bonding Curve (联合曲线) 机制实现 KOL 代币的公平启动与即时流动性。

## 2. 核心程序 (Programs)

系统主要由三个核心程序组成：

### 2.1 Launchpad Program (Bonding Curve)
负责 KOL 影响力代币的创建、定价和初始发行。

*   **机制**：类 pump.fun / friend.tech 的联合曲线机制。
*   **功能**：
    *   `create_market`: 创建新的 KOL 代币（SPL Token），初始化曲线池。
    *   `buy`: 用户使用 SOL 购买 KOL 代币，价格随曲线自动上涨。
    *   `sell`: 用户卖出 KOL 代币换回 SOL。
    *   `graduate`: 当市值达到一定阈值（如 $60k），自动将流动性迁移至 Raydium 并销毁 LP，实现永久流动性。

### 2.2 Agent Registry Program (数字生命身份)
管理 AI Agent 的链上身份、属性和权限。

*   **机制**：PDA 账户作为 Agent 的“实体”。
*   **功能**：
    *   `register_agent`: 绑定 KOL Token 和 NFT，创建 Agent 身份。
    *   `update_metadata`: 更新 Agent 的链上属性（等级、算力、战绩），需 Oracle 签名。
    *   `agent_wallet`: 每个 Agent 拥有独立的 PDA 钱包，用于接收任务收益。

### 2.3 Treasury & Buyback Program (收益回购)
处理协议收入分配与代币回购销毁。

*   **机制**：自动化分账。
*   **功能**：
    *   `distribute_revenue`: 将 Agent 赚取的 SOL 按比例分配（如：80% 回购销毁 KOL Token，10% 给 KOL 本人，10% 协议库）。
    *   `swap_and_burn`: 调用 DEX 接口（Jupiter/Raydium）自动买入 KOL Token 并 Burn。

## 3. 数据结构设计 (Account Structs)

### 3.1 CurveState (Launchpad)
```rust
#[account]
pub struct CurveState {
    pub creator: Pubkey,            // KOL 地址
    pub token_mint: Pubkey,         // 代币 Mint 地址
    pub token_vault: Pubkey,        // 代币储备账户
    pub sol_vault: Pubkey,          // SOL 储备账户 (PDA)
    pub virtual_sol_reserves: u64,  // 虚拟 SOL 储备 (用于定价)
    pub virtual_token_reserves: u64,// 虚拟代币储备
    pub real_sol_reserves: u64,     // 真实 SOL 储备
    pub total_supply: u64,          // 总供应量
    pub graduated: bool,            // 是否已毕业上市
    pub bump: u8,
}
```

### 3.2 AgentProfile (Registry)
```rust
#[account]
pub struct AgentProfile {
    pub authority: Pubkey,          // 控制者 (通常是 KOL 或用户)
    pub kol_token_mint: Pubkey,     // 绑定的影响力代币
    pub identity_nft: Pubkey,       // 代表 Agent 形象的 NFT (可选)
    pub total_earnings: u64,        // 总收益 (SOL)
    pub reputation_score: u64,      // 链上声誉分
    pub tasks_completed: u64,       // 完成任务数
    pub bump: u8,
}
```

## 4. 关键交互流程

### 流程一：KOL 发行代币 (Launchpad)
1.  KOL 在前端连接钱包，填写信息。
2.  调用 `Launchpad::create_market`。
3.  合约创建 SPL Token Mint。
4.  合约初始化 Bonding Curve Pool，铸造总供应量（如 10亿）到合约 Vault。

### 流程二：AI Agent 执行任务并回购 (Work & Earn)
1.  AI Agent (运行在链下 TEE 环境) 完成任务（如推特推广）。
2.  任务发布者通过合约支付 SOL 到 `AgentProfile` 关联的 PDA。
3.  触发 `Treasury::distribute_revenue` 指令。
4.  合约自动计算 80% 的 SOL，通过 CPI (Cross-Program Invocation) 调用 Raydium Swap 购买对应的 KOL Token。
5.  购买到的 KOL Token 被执行 `burn` 指令，实现通缩。

## 5. 技术栈推荐

*   **Framework**: Anchor (Rust)
*   **Token Standard**: SPL Token & Token-2022 (支持转账钩子)
*   **NFT Standard**: Metaplex Core (低成本) 或 Bubblegum (cNFT，适用于大量 Agent)
*   **Oracle**: Pyth / Switchboard (用于链下数据上链)
*   **DEX Integration**: Raydium CPMM 或 Meteora DLMM

## 6. 安全考量

*   **PDA 签名权限**：确保只有 Agent 逻辑能动用资金。
*   **Slippage Protection**：回购和交易时的滑点保护。
*   **Rug Pull Prevention**：Launchpad 阶段流动性锁定，毕业后 LP Token 自动销毁。
