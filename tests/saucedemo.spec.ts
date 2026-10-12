import { test } from "@playwright/test"

test("Login into saucedemo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    //fill the password
    await page.getByText("Login").click()

    await page.pause() //it will pause the test run until u resume
}
)