## 2026-01-27 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** This codebase frequently uses icon-only buttons (like menu toggles and language switchers) without ARIA labels, making them inaccessible to screen readers.
**Action:** Always check `components/` for buttons containing only icons (e.g., Lucide React icons) and ensure they have `aria-label` and `aria-expanded` attributes where appropriate.
