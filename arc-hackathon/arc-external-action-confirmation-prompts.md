# Arc External Action Confirmation Prompts

Updated: 2026-07-30

## Purpose

Provide exact confirmation prompts for external actions that move KOLMarket toward Arc official attention, ecosystem review, repost, or spotlight.

Do not execute any action below unless the user provides the matching action-time confirmation.

## Current Safe State

The public Arc review package is prepared and visible:

```text
https://github.com/dappweb/kolmarket/tree/main/arc-hackathon
```

The Encode checkpoint form was last observed as:

```text
restored_prefilled_submit_enabled_not_clicked
```

This means the form was ready to submit, but no checkpoint submission receipt has been captured.

## 1. Encode Checkpoint Submission

User confirmation:

```text
Confirm: click Encode Submit Checkpoint now.
```

Action:

- Open https://www.encodeclub.com/my-programmes/arc-hackathon
- Confirm fields are still prefilled
- Confirm code/review package URL is `https://github.com/dappweb/kolmarket/tree/main/arc-hackathon`
- Confirm presentation URL is `https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/deck.md`
- Confirm tracks are `DeFi Track` and `Agentic Economy Track`
- Click `Submit Checkpoint`
- Capture receipt/success state

Evidence to capture:

- success message,
- status/stage after submit,
- browser URL,
- timestamp,
- screenshot,
- any email/platform receipt.

## 2. Fresh Arc Testnet Transaction Evidence

User confirmation:

```text
Confirm: collect fresh Arc Testnet tx evidence.
```

Action:

- Use `public/arc/arc-fresh-tx-collection-steps.md`
- Record results in `public/arc/arc-testnet-tx-evidence-template.md`
- Only count successful explorer-confirmed Arc Testnet transactions
- Keep wallet signing and broadcasting user-controlled

Evidence to capture:

- tx hash,
- explorer URL,
- wallet,
- contract,
- product flow,
- timestamp,
- screenshot,
- explicit boundary if a wallet prompt or simulation does not broadcast.

## 3. Encode Programme Manager Message

User confirmation:

```text
Confirm: send Encode Programme Manager message.
```

Action:

- Use `public/arc/encode-program-manager-outreach.md`
- Send via Encode project chat or email fallback

Evidence to capture:

- sent message screenshot or URL,
- timestamp,
- recipient/channel,
- reply if any.

## 4. Discord Authorization / Message

User confirmation:

```text
Confirm: connect Discord and send Arc builder intro.
```

Action:

- Use Encode `Connect Discord Account` or official Arc/Circle Discord invite
- Review channel rules
- Send only the approved builder intro

Evidence to capture:

- connected role/server screenshot,
- channel name,
- message URL or screenshot,
- timestamp.

## 5. X Reply To Encode Hackathon Post

User confirmation:

```text
Confirm: post X reply to Encode Hackathon target.
```

Action:

- Use `public/arc/arc-public-engagement-targets.md`
- Target: https://x.com/encodeclub/status/2077767357108482138

Evidence to capture:

- posted reply URL,
- timestamp,
- visible account,
- any reply/engagement.

## 6. LinkedIn Circle Grants Comment

User confirmation:

```text
Confirm: post LinkedIn comment on Circle Grants target.
```

Action:

- Use `public/arc/arc-public-engagement-targets.md`
- Target: https://www.linkedin.com/posts/circle-internet-financial_applications-for-the-circle-developer-grants-activity-7460028072751157249-u7S2

Evidence to capture:

- comment URL or screenshot,
- timestamp,
- visible account,
- any reply/engagement.

## 7. LinkedIn Arc Builders Fund Comment

User confirmation:

```text
Confirm: post LinkedIn comment on Arc Builders Fund target.
```

Action:

- Use `public/arc/arc-public-engagement-targets.md`
- Target: https://www.linkedin.com/posts/circle-internet-financial_introducing-the-arc-builders-fund-circle-activity-7407147584093351936-0hK8

Evidence to capture:

- comment URL or screenshot,
- timestamp,
- visible account,
- any reply/engagement.

## 8. Demo Video Recording

User confirmation:

```text
Confirm: record Arc demo video.
```

Action:

- Use `public/arc/arc-demo-video-shot-list.md`
- Use `public/arc/arc-demo-video-teleprompter.md`
- Keep under 3 minutes

Evidence to capture:

- video file or URL,
- duration,
- access setting,
- screenshot.

## Global Rule

Prepared copy, prefilled forms, submit-enabled forms, and checklists are not completion evidence.

After any confirmed external action, update:

- `public/arc/arc-submission-manifest.json`
- `public/arc/arc-follow-up-log.md`
- `public/arc/arc-evidence-pack-template.md`
- `public/arc/chrome-arc-handoff.md`
- public `arc-hackathon/status.json`
- public `arc-hackathon/reviewer-status.md`
- public `arc-hackathon/next-action-queue.md`
- public `arc-hackathon/arc-goal-completion-audit-checklist.md`, if completion state changes.
