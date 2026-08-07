## 2025-02-18 - Accessibility Improvements in Header
**Learning:** Icon-only buttons (like mobile menu toggles and language switchers) are common in this design system but often lack `aria-label` or `aria-expanded` attributes. This makes navigation difficult for screen reader users.
**Action:** Always check `Header` and `Footer` components first for icon-only buttons and ensure they have descriptive ARIA labels and state indicators (`aria-expanded`, `aria-haspopup`).
