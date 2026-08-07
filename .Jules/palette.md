## 2025-02-18 - [Accessibility: Dynamic ARIA Labels]
**Learning:** Icon-only toggle buttons (like mobile menus) require dynamic `aria-label` values to convey state changes (e.g., "Open menu" vs "Close menu") to screen readers. This ensures users know what the button will do next.
**Action:** Always add translation keys for both states of a toggle button (e.g., `menu_open`, `menu_close`) and use a ternary operator in the `aria-label` attribute. Verify default locale behavior (e.g., `zh` defaults) when testing.
