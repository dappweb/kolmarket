## 2025-02-18 - Icon-only Buttons Missing Accessibility
**Learning:** Key navigation elements (Mobile Menu, Language Switcher) used icon-only buttons without `aria-label`, making them invisible to screen readers.
**Action:** Always check `components/Header.tsx` and similar nav components for `aria-label` on icon buttons. Use `focus-visible:ring-2` for keyboard users.
