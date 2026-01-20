from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to launchpad...")
        page.goto("http://localhost:3000/launchpad")

        # Wait for page to load
        page.wait_for_load_state("networkidle")

        print("Verifying Phase 3 Accessibility...")

        # 1. Token Name Input
        token_name_input = page.locator("#token-name")
        expect(token_name_input).to_be_visible()

        token_name_label = page.locator("label[for='token-name']")
        expect(token_name_label).to_be_visible()
        print("✅ Found Token Name input and label association")

        # 2. Token Symbol
        token_symbol_input = page.locator("#token-symbol")
        expect(token_symbol_input).to_be_visible()

        token_symbol_label = page.locator("label[for='token-symbol']")
        expect(token_symbol_label).to_be_visible()
        print("✅ Found Token Symbol input and label association")

        # 3. Token Supply
        token_supply_input = page.locator("#token-supply")
        expect(token_supply_input).to_be_visible()

        token_supply_label = page.locator("label[for='token-supply']")
        expect(token_supply_label).to_be_visible()
        print("✅ Found Token Supply input and label association")

        # 4. Payment Amount Input
        # There are two number inputs: Total Supply (disabled) and Payment Amount.
        # We can find the one that is NOT #token-supply
        payment_input = page.locator("input[type='number']:not([id='token-supply'])")
        expect(payment_input).to_be_visible()

        # Check if aria-label attribute exists and is not empty
        aria_label = payment_input.get_attribute("aria-label")
        print(f"Payment Input aria-label: {aria_label}")
        assert aria_label is not None and len(aria_label) > 0
        print("✅ Payment input has aria-label")

        # Take screenshot
        page.screenshot(path="/home/jules/verification/launchpad_phase3.png")
        print("Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    run()
