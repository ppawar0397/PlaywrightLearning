import {test} from "@playwright/test"

test.skip("mouse hover example", async({page})=>{
   await page.goto("https://www.amazon.in/")
   await page.waitForTimeout(5000)
   await page.getByText("Hello, sign in").hover()
   await page.getByText("Your Orders").click()
   await page.pause()
})
test("mouse hover example2", async({page})=>{
   await page.goto("https://www.arena-multimedia.com/")
   await page.waitForTimeout(5000)
   await page.getByText("Our Courses ").nth(0).hover()
   await page.getByText("Animation",{exact:true}).nth(0).hover()
   let courses=await page.locator("(//ul[@class='subCourseList'])[1]/li/a").allTextContents()
   if(courses.includes("Advanced Program in Animation and VFX"))
      console.log("The VFX couse is available")
   else
      console.log("The VFX couse is NOT available")
   
   await page.pause()

})
