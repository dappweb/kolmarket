## 2025-02-14 - Navigation Accessibility
**Learning:** Core navigation elements like the mobile menu and language switcher were implemented as icon-only buttons without accessible labels or state indicators, creating a significant barrier for screen reader users.
**Action:** When implementing or reviewing navigation components, explicitly check for `aria-label` on icon buttons and ensure `aria-expanded` and `aria-controls` are used for toggles. Add visible focus indicators for keyboard users.
