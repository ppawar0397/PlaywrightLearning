import { test } from "@playwright/test"

test("Fill the form different elements", async ({ page }) => {

    let status
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(5000)
    status = await page.getByPlaceholder("Enter Name").isVisible()
    console.log("Name inputbox is visible or not ", status)
    status = await page.getByPlaceholder("Enter Name").isEditable()
    console.log("Name is editable or not", status)

    status = await page.getByPlaceholder("Enter Name").isEnabled()
    console.log("Name is enabled or not", status)
    await page.getByPlaceholder("Enter Name").fill("Vijay")


    status = await page.locator("(//input[@id='male'])").isChecked()
    console.log(status)

    await page.locator("(//input[@id='male'])").check()
    status = await page.locator("(//input[@id='male'])").isChecked()
    console.log(status)

    await page.locator("(//input[@id='sunday'])").check()
    await page.getByText("Monday").check()
    await page.locator("//select[@id='country']").selectOption({ value: 'usa' })
    await page.locator("//select[@id='colors']").selectOption({ value: 'green' })
    await page.locator("//select[@id='animals']").selectOption(["cat", "deer"])

    let month, year
    await page.locator("input#datepicker").click()
    month = await page.locator("span.ui-datepicker-month").textContent()
    //year=await page.locator("span.ui-datepicker-year").textContent()
    while (month != "December") {
        await page.getByText("Next").click()
        await page.waitForTimeout(1000)
        month = await page.locator("span.ui-datepicker-month").textContent()
    }
    await page.getByText("20", { exact: true }).nth(1).click()

    await page.locator("input#txtDate").click()
    await page.getByLabel("Select month").selectOption("Nov")
    await page.getByLabel("Select year").selectOption("2027")
    await page.getByText("10", { exact: true }).nth(1).click()

    await page.getByPlaceholder('Start Date').fill("2025-07-23");
    await page.getByPlaceholder('End Date').fill('2025-07-28');

    await page.pause()

});


