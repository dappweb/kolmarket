# Encode Checkpoint Submission Receipt Template

Updated: 2026-07-30

## Use

Use immediately after clicking `Submit Checkpoint` on:

https://www.encodeclub.com/my-programmes/arc-hackathon

## Before Submit

Current prefilled fields:

- Code / review package URL: https://github.com/dappweb/kolmarket/tree/main/arc-hackathon
- Presentation URL: https://github.com/dappweb/kolmarket/blob/main/arc-hackathon/deck.md
- Tracks: DeFi Track, Agentic Economy Track

Do not click `Submit Checkpoint` without action-time confirmation.

## Receipt Fields To Capture

- Submission timestamp:
- Browser URL after submit:
- Visible success message:
- Project status after submit:
- Current stage after submit:
- Screenshot path or filename:
- Any confirmation email:
- Any warning/error message:

## Files To Update After Submit

- `public/arc/arc-submission-manifest.json`
- `public/arc/arc-follow-up-log.md`
- `public/arc/arc-evidence-pack-template.md`
- `public/arc/chrome-arc-handoff.md`
- `public/arc/arc-official-outreach-tracker.md`

## Manifest Changes Only If Receipt Is Visible

Set these only with direct receipt evidence:

```json
{
  "hackathonCheckpointSubmitted": true,
  "missingEvidence.submissionReceipts": [
    {
      "channel": "Encode Club",
      "type": "mid_submission_checkpoint",
      "url": "https://www.encodeclub.com/my-programmes/arc-hackathon",
      "submittedAt": "TBD",
      "receiptEvidence": "TBD"
    }
  ]
}
```

## Do Not Claim

Checkpoint submission does not prove:

- final hackathon submission,
- judging eligibility,
- Arc official listing,
- Arc official repost,
- Arc spotlight,
- Circle grant submission,
- Circle grant acceptance.
