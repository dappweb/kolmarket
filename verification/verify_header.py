
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 720})
        page = context.new_page()

        try:
            # Navigate to the home page
            page.goto("http://localhost:3000")

            # Wait for content to load
            page.wait_for_selector('header')

            # Verify language switcher ARIA label
            lang_button = page.locator('button[aria-label="Change language"]')
            expect(lang_button).to_be_visible()

            # Verify aria-expanded starts as false
            expect(lang_button).to_have_attribute("aria-expanded", "false")
            expect(lang_button).to_have_attribute("aria-haspopup", "true")

            # Click the language button
            lang_button.click()

            # Verify aria-expanded becomes true
            expect(lang_button).to_have_attribute("aria-expanded", "true")

            # Verify the menu is visible and has role="menu"
            menu = page.locator('div[role="menu"]')
            expect(menu).to_be_visible()

            # Verify menu items
            menu_items = menu.locator('button[role="menuitem"]')
            expect(menu_items).to_have_count(4)

            # Take a screenshot
            page.screenshot(path="verification/header_accessibility.png")
            print("Verification successful!")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
