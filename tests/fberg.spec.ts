test("To register a new user", async ({page})=>{

   await page.goto("https://www.facebook.com/")

   await page.getByLabel("Create new account").click()

   await page.getByText("First name").fill("john")

   await page.getByText("Surname").fill("smith")

   await page.getByLabel("Select day").click()

   await page.locator("(//div[.='5'])[1]").click()

   await page.getByLabel("Select month").click()

   await page.locator("(//div[.='July'])[1]").click()

   

   await page.pause()

})


**********************************************************************

import {test} from "@playwright/test"

test("Search for flights", async({page})=>{

  await page.goto("https://www.cleartrip.com/")

  await page.getByTestId("closeIcon").click()

  await page.getByPlaceholder("Where from?").fill("chennai")

  await page.waitForTimeout(2000)

  await page.getByText("Chennai, IN - Chennai Airport (MAA)").click()

  await page.getByPlaceholder("Where to?").fill("Bangalore")

  await page.waitForTimeout(2000)

  await page.getByText("Bengaluru, IN - Kempegowda International Airport (BLR)").click()

  await page.getByTestId("dateSelectOnward").click()

  await page.getByText("28").nth(0).click()

  await page.pause()

})