## 2025-02-18 - Missing Accessibility Attributes on Icon-Only Buttons
**Learning:** Icon-only buttons (like menu toggles and language switchers) consistently lack `aria-label` and `aria-expanded` attributes in this codebase, making them inaccessible to screen readers.
**Action:** When working on existing components, check for icon-only buttons and ensure they have descriptive `aria-label`s and appropriate state attributes (`aria-expanded`, `aria-haspopup`).
