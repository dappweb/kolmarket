# KOLMarket 全站优化方案

基于当前的项目架构（React + Vite + Solana）和“数字生命经济体”的产品愿景，以下是从视觉体验、功能交互到技术架构的全方位优化方案。

## 1. 视觉体验与交互设计 (UI/UX) - **优先级：高**
目前网站结构清晰但略显静态，缺乏“赛博朋克/未来科技”的沉浸感。

*   **引入平滑动效 (Motion Design)**:
    *   **方案**: 集成 `framer-motion`。
    *   **落地**: 页面切换时的淡入淡出、卡片悬停时的 3D 倾斜效果、数字跳动动画。
*   **增强环境氛围**:
    *   **方案**: 在 `bg-dark-bg` 基础上增加动态的 WebGL 背景（如流动的网格、漂浮的代码粒子）。
    *   **落地**: 优化 `Hero` 部分的背景，使其不只是静态图片或 CSS 渐变。
*   **玻璃拟态与光效**:
    *   **方案**: 统一卡片的 Glassmorphism 风格（高斯模糊 + 半透明），增加边框流光效果（Border Beam）。

## 2. Web3 功能深度集成 - **优先级：中**
目前主要是 UI 演示，需要接入真实的 Solana 钱包交互。

*   **Solana 钱包适配**:
    *   **方案**: 集成 `@solana/wallet-adapter-react` 和 `@solana/wallet-adapter-react-ui`。
    *   **落地**: 替换 Header 中的静态 "Connect Wallet" 按钮，支持 Phantom/Solflare 连接，并显示 SOL 余额。
*   **链上状态同步**:
    *   **方案**: 使用 `ConnectionProvider` 监听链上数据。
    *   **落地**: 在 `Launchpad` 页面，点击“发行”真正调用我们编写的 `kol_launchpad` 合约（Devnet 环境）。

## 3. 核心业务模块增强

### A. 交易市场 (Exchange Page)
*   **专业化 K 线图**: 目前是简单的区域图。建议集成 `TradingView Lightweight Charts`，支持缩放、指标叠加。
*   **实时订单簿**: 增加 Order Book 可视化组件（买卖盘深度图）。

### B. 数字铸造厂 (Foundry Page)
*   **3D 预览增强**: `SoulPreview` 组件目前是 CSS 模拟。未来可引入 `React Three Fiber` 加载真实的 GLB 模型，支持鼠标拖拽旋转。
*   **语音交互**: 集成浏览器 Web Speech API 或 OpenAI Realtime API，让用户能真的对着网页说话，预览“数字生命”的回应。

### C. 智能工作台 (Intelligence Page)
*   **任务可视化**: 将列表改为“全球任务地图”，在地图上闪烁显示 AI Agent 正在执行任务的节点（纽约、东京、伦敦）。

## 4. 技术架构优化
*   **状态管理**: 目前状态分散在各组件。引入 `Zustand` 或 `Recoil` 管理全局状态（如用户登录态、全局配置、当前选中的 Token）。
*   **Mock 数据层**: 建立统一的 `services/mock` 目录，模拟后端 API 响应，方便前后端分离开发。

---

## 🚀 立即执行计划 (Quick Wins)

为了立刻提升网站质感，我将执行以下操作：
1.  **安装 `framer-motion`**：为关键元素添加入场和交互动画。
2.  **优化 `Hero` 组件**：增加更有质感的动态效果。
