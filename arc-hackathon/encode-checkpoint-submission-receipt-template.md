# Encode Checkpoint Submission Receipt Template

Updated: 2026-07-30

## Use

Use immediately after clicking `Submit Checkpoint` on:

https://www.encodeclub.com/my-programmes/arc-hackathon

This template does not prove submission. It is only the capture format for the first browser state after a confirmed submit attempt.

## Current Pre-Submit State

Last observed state:

```text
restored_prefilled_submit_enabled_not_clicked
```

Current prefilled fields:

- Code / review package URL: https://github.com/dappweb/kolmarket/tree/main/arc-hackathon
- Presentation URL: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/deck.md
- Tracks: DeFi Track, Agentic Economy Track

Required action-time confirmation before click:

```text
Confirm: click Encode Submit Checkpoint now.
```

## Receipt Fields To Capture

- Submission attempt timestamp:
- Browser URL after click:
- Visible success message:
- Visible error or validation message:
- Project status after click:
- Current stage after click:
- Submit button state after click:
- Screenshot path or filename:
- Any confirmation email:
- Any platform notification:
- Notes on fields changed before submit:

## Outcome Classification

Use exactly one:

```text
success_receipt_captured
validation_error_after_click
platform_error_after_click
session_or_login_issue
unknown_no_receipt
```

Only `success_receipt_captured` may support setting checkpoint-submitted flags.

## Files To Update After Submit Attempt

Always update local records:

- `public/arc/arc-submission-manifest.json`
- `public/arc/arc-follow-up-log.md`
- `public/arc/arc-evidence-pack-template.md`
- `public/arc/chrome-arc-handoff.md`
- `public/arc/arc-official-outreach-tracker.md`

Update public GitHub package when evidence changes:

- public `arc-hackathon/status.json`
- public `arc-hackathon/reviewer-status.md`
- public `arc-hackathon/next-action-queue.md`
- public `arc-hackathon/evidence-boundary.md`
- public `arc-hackathon/arc-goal-completion-audit-checklist.md`
- public `arc-hackathon/official-channel-snapshot.md`

## Manifest Changes Only If Receipt Is Visible

Set these only with direct receipt evidence:

```json
{
  "hackathonCheckpointSubmitted": true,
  "missingEvidence": {
    "submissionReceipts": [
      {
        "channel": "Encode Club",
        "type": "mid_submission_checkpoint",
        "url": "https://www.encodeclub.com/my-programmes/arc-hackathon",
        "submittedAt": "TBD",
        "receiptEvidence": "TBD"
      }
    ]
  }
}
```

If the result is an error, do not set submitted flags. Record the exact visible error and keep the checkpoint state incomplete.

## Do Not Claim

Checkpoint submission, even if successful, does not prove:

- final hackathon submission,
- judging eligibility,
- Arc official listing,
- Arc official repost,
- Arc spotlight,
- Circle grant submission,
- Circle grant acceptance,
- fresh Arc Testnet transaction execution,
- production Arc settlement.
