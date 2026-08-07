## 2025-02-18 - Icon-Only Buttons
**Learning:** The application frequently uses `lucide-react` icons in buttons without text labels (e.g., Mobile Menu, Language Switcher), relying solely on visual cues. This makes them inaccessible to screen readers.
**Action:** Always check for `aria-label` or `sr-only` text when encountering icon-only buttons using `lucide-react`.
