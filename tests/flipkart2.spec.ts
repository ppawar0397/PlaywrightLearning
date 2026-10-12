import {test} from "@playwright/test"

test("Search for a product",async ({page})=>{
   await page.goto("https://www.flipkart.com")
   await page.getByText("✕").click()

   await page.getByTitle("Search for Products, Brands and More").nth(1).fill("mobiles")
   await page.getByTitle("Search for Products, Brands and More").nth(1).press("Enter")
   await page.waitForTimeout(5000)
  // await page.getByText("realme P4 Lite (Sea Blue, 128 GB)").scrollIntoViewIfNeeded()
   //await page.getByText("realme P4 Lite (Sea Blue, 128 GB)").click()

   let loc=await page.getByText("realme P4R 5G (Silver Glare, 128 GB)").boundingBox()
   if(loc)
   {
      page.evaluate((y)=>{
         window.scrollTo(0,y)
      },loc.y)
   }
 
  //await page.mouse.wheel(0,1500)
   await page.pause()
})