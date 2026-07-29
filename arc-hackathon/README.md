# KOLMarket on Arc

KOLMarket is building USDC-native creator growth markets and campaign settlement infrastructure on Arc.

## Current Status

This is the public Arc review package for KOLMarket.

Prepared and public:

- Arc review package and reviewer status,
- current-state summary,
- public brief, submission draft, and review deck,
- operator runbook and next-action queue,
- external action confirmation prompts,
- completion audit checklist,
- fresh Arc tx collection steps and tx evidence template,
- final submission production plan.

Observed state:

- Encode Hackathon registration and KOLMarket project creation were observed.
- Encode stage was observed as `Mid-submission checkpoint`.
- Encode checkpoint form was observed as `restored_prefilled_submit_enabled_not_clicked`.
- Selected tracks were observed as `DeFi Track` and `Agentic Economy Track`.
- One public X reply exists: https://x.com/KOLMARKET/status/2082565862381507059

Still missing:

- Encode checkpoint receipt,
- fresh Arc Testnet tx hash,
- 3-minute demo video URL,
- final Encode submission receipt,
- Circle grant receipt,
- Arc official response, repost, listing, or spotlight.

## Overview

KOLMarket connects creator campaigns, KOL attribution, Growth Pool rewards, creator-token launch workflows, and KOLSwap market infrastructure.

The Arc pilot focuses on:

- aUSDC-denominated campaign budgets,
- creator/KOL attribution workflows,
- Growth Pool reward state,
- creator-token market infrastructure,
- evidence boundaries for configured, pending, claimable, and settled states.

## Review Package Index

- Current state summary: [`arc-current-state-summary.md`](./arc-current-state-summary.md)
- Reviewer status: [`reviewer-status.md`](./reviewer-status.md)
- Public brief: [`public-brief.md`](./public-brief.md)
- Hackathon submission draft: [`submission.md`](./submission.md)
- Review deck outline: [`deck.md`](./deck.md)
- Evidence boundary: [`evidence-boundary.md`](./evidence-boundary.md)
- Status metadata: [`status.json`](./status.json)
- Operator runbook: [`arc-operator-runbook.md`](./arc-operator-runbook.md)
- Next action queue: [`next-action-queue.md`](./next-action-queue.md)
- Next command brief: [`arc-next-command-brief.md`](./arc-next-command-brief.md)
- External action confirmation prompts: [`arc-external-action-confirmation-prompts.md`](./arc-external-action-confirmation-prompts.md)
- Goal completion audit checklist: [`arc-goal-completion-audit-checklist.md`](./arc-goal-completion-audit-checklist.md)
- Outreach readiness matrix: [`arc-outreach-readiness-matrix.md`](./arc-outreach-readiness-matrix.md)
- Encode checkpoint submit decision memo: [`encode-checkpoint-submit-decision-memo.md`](./encode-checkpoint-submit-decision-memo.md)
- Encode checkpoint receipt template: [`encode-checkpoint-submission-receipt-template.md`](./encode-checkpoint-submission-receipt-template.md)
- Encode programme manager outreach: [`encode-program-manager-outreach.md`](./encode-program-manager-outreach.md)
- Final submission production plan: [`encode-final-submission-production-plan.md`](./encode-final-submission-production-plan.md)
- Fresh tx collection steps: [`arc-fresh-tx-collection-steps.md`](./arc-fresh-tx-collection-steps.md)
- Arc Testnet tx evidence template: [`arc-testnet-tx-evidence-template.md`](./arc-testnet-tx-evidence-template.md)
- Demo video shot list: [`arc-demo-video-shot-list.md`](./arc-demo-video-shot-list.md)
- Demo video teleprompter: [`arc-demo-video-teleprompter.md`](./arc-demo-video-teleprompter.md)
- Official channel snapshot: [`official-channel-snapshot.md`](./official-channel-snapshot.md)
- Public engagement targets: [`arc-public-engagement-targets.md`](./arc-public-engagement-targets.md)

## Why Arc

Arc is a strong fit for KOLMarket because creator campaign budgets and KOL rewards are naturally stablecoin-denominated.

The pilot uses Arc to explore:

- predictable campaign operations with USDC-denominated gas,
- deterministic settlement for campaign/reward workflows,
- EVM-compatible launch and market infrastructure,
- future Circle/CCTP-aligned campaign capital movement,
- Circle developer tooling for production-ready programmable money.

## Arc Testnet Configuration

- Chain: Arc Testnet
- Chain ID: 5042002
- CAIP-2: eip155:5042002
- RPC: https://rpc.testnet.arc.network
- Explorer: https://testnet.arcscan.app
- Quote asset: aUSDC
- aUSDC address: 0x3D0Eebe31843C3FfC8F9A6b66Ba155425F4A6eaa
- Growth Pool escrow: 0xE67E6c2ee71c32df4AB05ba3D4505B2e17603438

## Hackathon Track Fit

Primary track: DeFi Track.

KOLMarket uses stablecoin-native rails for campaign budgets, reward workflows, and creator-token market infrastructure.

Secondary track: Agentic Economy Track.

Creator campaigns can evolve into agent-assisted campaign planning, KOL task routing, automated creator rewards, and USDC-native task settlement while keeping wallet signing and broadcasting user-controlled.

## Demo Assets

- Public app: https://kolmarket.ai
- Docs: https://kolmarket.ai/docs
- X: https://x.com/KOLMARKET
- Deck: [`deck.md`](./deck.md)
- Demo video: TBD
- Fresh Arc Testnet tx evidence: TBD

## Current Shortest Path

1. Submit the Encode checkpoint after action-time confirmation.
2. Capture the checkpoint receipt.
3. Collect fresh Arc Testnet tx evidence after wallet-action confirmation.
4. Produce the 3-minute demo video.
5. Continue Arc/Circle/Encode official-channel outreach after action-time confirmation.

Required confirmations:

```text
Confirm: click Encode Submit Checkpoint now.
Confirm: collect fresh Arc Testnet tx evidence.
```

## Submission Boundary

This repository/package describes an Arc Testnet pilot and public review package.

It does not claim:

- Arc official listing,
- Arc official endorsement,
- Arc official repost,
- Arc builder spotlight,
- Circle grant submission or acceptance,
- Encode checkpoint submission,
- Encode final submission,
- fresh Arc Testnet transaction execution,
- production Arc settlement.

Those claims require official-channel evidence, platform receipts, or explorer-confirmed transaction evidence.
