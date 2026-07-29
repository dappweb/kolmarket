# Arc Operator Runbook

Updated: 2026-07-30

## Purpose

Single-page execution runbook for moving KOLMarket from prepared Arc package to externally evidenced progress.

This runbook does not prove any external action has been completed.

## Priority 1 - Submit Encode Checkpoint

Precondition:

- User confirms: `Confirm: click Encode Submit Checkpoint now.`

Open:

```text
https://www.encodeclub.com/my-programmes/arc-hackathon
```

Expected prefilled fields:

- Code / review package: https://github.com/dappweb/kolmarket/tree/main/arc-hackathon
- Presentation: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/deck.md
- Tracks: DeFi Track and Agentic Economy Track

Click:

```text
Submit Checkpoint
```

Immediately capture:

- success message,
- dashboard status/stage,
- browser URL,
- timestamp,
- screenshot,
- any email/platform receipt.

Then update:

- `public/arc/arc-submission-manifest.json`
- `public/arc/arc-follow-up-log.md`
- `public/arc/arc-evidence-pack-template.md`
- `public/arc/chrome-arc-handoff.md`
- public `arc-hackathon/status.json`
- public `arc-hackathon/reviewer-status.md`

## Priority 2 - Ask Encode Programme Manager

Precondition:

- User confirms sending external message.

Use:

```text
public/arc/encode-program-manager-outreach.md
```

Preferred short channel:

- Encode project chat, if available.

Fallback:

- Email: giles@encode.club

Capture:

- sent message URL/screenshot,
- timestamp,
- any reply.

## Priority 3 - Produce Demo Video

Use:

- `public/arc/arc-demo-video-shot-list.md`
- `public/arc/arc-demo-video-teleprompter.md`

Record:

- under 3 minutes,
- no secrets,
- no unverified official claims.

After upload, capture:

- video URL,
- duration,
- access setting,
- screenshot.

Update:

- `public/arc/encode-final-submission-production-plan.md`
- `public/arc/arc-evidence-pack-template.md`
- public `arc-hackathon/status.json`

## Priority 4 - Collect Fresh Arc Testnet Tx Evidence

Use:

```text
public/arc/arc-testnet-tx-evidence-template.md
```

Valid evidence requires:

- confirmed Arc explorer transaction,
- matching wallet and contract,
- successful status,
- product flow alignment.

Invalid:

- quote only,
- wallet prompt only,
- failed/reverted tx,
- wrong-chain tx,
- UI-only state.

## Priority 5 - Public Engagement

Use:

```text
public/arc/arc-public-engagement-targets.md
```

Rules:

- one high-signal reply/comment per official post,
- no mass-tagging,
- no official endorsement claims,
- link public package,
- capture posted URL.

## Hard Claim Boundary

Do not claim any of these without direct evidence:

- Arc official listing,
- Arc official repost,
- Arc spotlight,
- Circle grant submitted,
- Circle grant accepted,
- Encode checkpoint submitted,
- Encode final submitted,
- production Arc settlement.
