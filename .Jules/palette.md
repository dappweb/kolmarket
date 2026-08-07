## 2024-05-23 - Accessibility Pattern in Legacy Components
**Learning:** Legacy components in root `components/` folder frequently use icon-only buttons without ARIA labels. Default language is Chinese (`zh`), so verification scripts must account for localized ARIA labels.
**Action:** When auditing `components/` folder, prioritize adding `aria-label` keys to both `en.json` and `zh.json` and check for `aria-expanded` state on toggles.
