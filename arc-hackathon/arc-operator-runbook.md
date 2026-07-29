# Arc Operator Runbook

Updated: 2026-07-30

## Purpose

Single-page execution runbook for moving KOLMarket from prepared Arc package to externally evidenced progress.

This runbook does not prove any external action has been completed.

## Current Safe State

- Public Arc package is published: https://github.com/dappweb/kolmarket/tree/main/arc-hackathon
- Reviewer status is published: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/reviewer-status.md
- Next action queue is published: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/next-action-queue.md
- Encode checkpoint form was last observed as `restored_prefilled_submit_enabled_not_clicked`.
- Fresh Arc tx collection steps are published: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/arc-fresh-tx-collection-steps.md
- No Encode checkpoint receipt, fresh Arc tx hash, demo video URL, Circle grant receipt, Arc official response, repost, listing, or spotlight is confirmed yet.

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

Click only after confirmation:

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
- public `arc-hackathon/next-action-queue.md`
- public `arc-hackathon/arc-goal-completion-audit-checklist.md`

## Priority 2 - Collect Fresh Arc Testnet Tx Evidence

Precondition:

- User confirms: `Confirm: collect fresh Arc Testnet tx evidence.`

Use:

```text
public/arc/arc-fresh-tx-collection-steps.md
public/arc/arc-testnet-tx-evidence-template.md
```

Valid evidence requires:

- selected chain is Arc Testnet,
- confirmed Arc explorer transaction,
- matching wallet and contract,
- successful status,
- product flow alignment,
- timestamp and screenshot.

Invalid:

- quote only,
- wallet prompt only,
- simulation only,
- failed/reverted tx,
- wrong-chain tx,
- UI-only state,
- prepared collection steps without an explorer-confirmed transaction.

Keep wallet signing and broadcasting user-controlled.

## Priority 3 - Produce Demo Video

Use:

- `public/arc/arc-demo-video-shot-list.md`
- `public/arc/arc-demo-video-teleprompter.md`

Record:

- under 3 minutes,
- no secrets,
- no unverified official claims,
- clear separation between Arc Testnet pilot, prepared materials, and unconfirmed official outcomes.

After upload, capture:

- video URL,
- duration,
- access setting,
- screenshot.

Update:

- `public/arc/encode-final-submission-production-plan.md`
- `public/arc/arc-evidence-pack-template.md`
- public `arc-hackathon/status.json`

## Priority 4 - Ask Encode Programme Manager

Precondition:

- User confirms: `Confirm: send Encode Programme Manager message.`

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
- capture posted URL,
- do not repeat the same generic reply on the same Arc thread unless Arc/Circle/Encode engages first.

## Hard Claim Boundary

Do not claim any of these without direct evidence:

- Arc official listing,
- Arc official repost,
- Arc spotlight,
- Circle grant submitted,
- Circle grant accepted,
- Encode checkpoint submitted,
- Encode final submitted,
- fresh Arc Testnet transaction executed,
- production Arc settlement.
