## 2025-05-02 - Icon-Only Buttons Missing Accessibility
**Learning:** The application uses `lucide-react` icons for buttons (like the hamburger menu and language switcher) but often lacks `aria-label` attributes, making them inaccessible to screen readers.
**Action:** When working on UI components in this repo, always check icon-only buttons and add `aria-label`, `aria-expanded`, and other relevant ARIA attributes.
