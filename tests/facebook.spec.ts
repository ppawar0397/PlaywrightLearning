import {test} from "@playwright/test"

test("Login into facebook", async({page})=>{

    await page.goto("https://www.facebook.com")

    await page.locator("//input[@name='email']").fill("venkat@gmail.com")

    await page.locator("//input[@name='pass']").fill("123456")

    await page.getByLabel("Log in").click()

    await page.pause()

})