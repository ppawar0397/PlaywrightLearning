import {test} from "@playwright/test"

test("select value from dropdown", async({page})=>{
  await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")
  await page.locator("//select[@id='select-demo']").selectOption("Wednesday")
  await page.waitForTimeout(3000)
        ///OR
   await page.locator("//select[@id='select-demo']").selectOption({value:'Monday'})
    await page.waitForTimeout(3000)
        //OR
    await page.locator("//select[@id='select-demo']").selectOption({index:6})


    ////multi select drop down
    await page.locator("//select[@id='multi-select']").selectOption(["Florida","Ohio","California"])
    await page.pause()
})