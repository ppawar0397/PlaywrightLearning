import { test } from "@playwright/test"

test("Login and Logout from orangehrmlive", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    //fill the password
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", { name: " Login " }).click()
    //await page.locator('button[type="submit"]').click()
    
    //Logout code
    await page.locator('.oxd-userdropdown-tab').click();
    await page.getByRole("menuitem", { name: "Logout" }).click()
    await page.pause() //it will pause the test run until u resume
}
)