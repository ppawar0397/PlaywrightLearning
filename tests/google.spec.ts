import { test } from "@playwright/test"

test("To search for value in google", async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.getByTitle("Search").fill("playwright")
    await page.getByTitle("Search").press("Enter")

    await page.pause() //it will pause the test run until u resume
}
)