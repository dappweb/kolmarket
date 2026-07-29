# Arc Fresh Transaction Evidence Collection Steps

Updated: 2026-07-30

## Purpose

Prepare a safe path to collect fresh Arc Testnet transaction evidence for Encode final submission, Circle Grants, and Arc ecosystem review.

This file does not initiate, sign, broadcast, or verify any transaction.

## Required Evidence Standard

Valid evidence requires:

- Arc Testnet transaction hash,
- successful explorer status,
- matching wallet address,
- matching contract/action,
- timestamp during the submission window,
- product screenshot showing the related workflow,
- clear boundary between testnet pilot and production readiness.

## Invalid Evidence

Do not count:

- UI quote only,
- wallet prompt only,
- simulation only,
- failed or reverted transaction,
- wrong-chain transaction,
- Robinhood/BSC transaction reused as Arc evidence,
- HTTP 200 page check,
- GitHub package link.

## Candidate Evidence Path A - Growth Pool / Reward State

Goal:

```text
Show Arc Testnet reward or Growth Pool state connected to aUSDC-denominated campaign infrastructure.
```

Before any wallet action, capture:

- selected chain is Arc Testnet,
- connected wallet address,
- visible Growth Pool / rewards surface,
- expected contract address,
- expected function/action.

After user confirms wallet action:

- capture transaction hash,
- open explorer URL,
- confirm success,
- capture screenshot,
- record wallet/contract/action.

## Candidate Evidence Path B - Creator Launch / Campaign Setup

Goal:

```text
Show Arc Testnet creator/campaign infrastructure flow, even if final production launch remains gated.
```

Before any wallet action, capture:

- selected chain is Arc Testnet,
- launch/campaign form state,
- expected asset and contract,
- warning if flow is testnet-only or partially supported.

After user confirms wallet action:

- capture transaction hash,
- open explorer URL,
- confirm success,
- capture screenshot,
- record any token/market/campaign identifiers.

## Candidate Evidence Path C - App Kit / USDC Movement Alignment

Goal:

```text
Show the planned Arc/Circle App Kit path for Bridge, Swap, Send, or Unified Balance workflows.
```

If implemented:

- capture Arc Testnet selected,
- capture App Kit flow,
- capture transaction hash and explorer URL.

If not implemented:

- state as planned integration only,
- do not count as transaction evidence.

## Execution Boundary

Any transaction collection requires explicit action-time confirmation:

```text
Confirm: collect fresh Arc Testnet tx evidence.
```

Wallet signing and broadcasting must remain user-controlled.

## Evidence Record Template

```text
Date:
Chain:
Chain ID:
Wallet:
Product flow:
Contract:
Function/action:
Asset:
Amount:
Transaction hash:
Explorer URL:
Status:
Screenshot:
Notes:
Boundary:
```

## Files To Update After Evidence Is Collected

- `public/arc/arc-testnet-tx-evidence-template.md`
- `public/arc/arc-evidence-pack-template.md`
- `public/arc/encode-final-submission-production-plan.md`
- `public/arc/arc-follow-up-log.md`
- `public/arc/chrome-arc-handoff.md`
- public `arc-hackathon/status.json`
- public `arc-hackathon/reviewer-status.md`
- public `arc-hackathon/arc-goal-completion-audit-checklist.md`
