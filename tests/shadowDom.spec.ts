import {test} from "@playwright/test"
test("flipkart assignment" ,async({page})=>{
await page.goto("https://www.testmuai.com/selenium-playground/shadow-dom/")
//either default locator or cssSelectors then only shadow root elements work, xpath dos not work for shadow elements
await page.locator('input[name="username"]').fill('testuser');
await page.pause()
})