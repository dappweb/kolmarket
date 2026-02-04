## 2026-02-04 - Accessibility in Navigation Components
**Learning:** Icon-only buttons (like mobile menu toggles and language switchers) frequently lack `aria-label` and state indicators (`aria-expanded`), making them invisible or confusing to screen reader users.
**Action:** Always verify that interactive elements without visible text have descriptive `aria-label` attributes and appropriate state indicators. Check `i18n` files for missing keys to support these labels.
