import {test} from "@playwright/test"

test("Fill the form different elements", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
page.getByPlaceholder("Enter Name").fill("TestUser")
page.locator("//input[@id='email']").fill("user@gmail.com")
page.locator("//input[@id='male']").click()
page.locator("//input[@value='sunday']").click()
page.locator("//input[@value='monday']").click()
page.locator("//select[@id='country']").selectOption({value:'usa'})
page.locator("//select[@id='colors']").selectOption({value:'green'})
await page.pause()
})
