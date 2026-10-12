import {test} from "@playwright/test"

test("Handle drag and drop ", async({page})=>{
   await page.goto("https://jqueryui.com/droppable/")

   const f1= await page.frameLocator("iframe.demo-frame")

   await f1.locator("div#draggable").dragTo(await f1.locator("div#droppable"))

   await page.pause()
})