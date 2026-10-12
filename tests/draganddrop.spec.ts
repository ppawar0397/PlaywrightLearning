import {test} from "@playwright/test"

test("Handle drag and drop ", async({page})=>{

   await page.goto("https://jqueryui.com/droppable/")

   

   await page.locator("div#draggable").dragTo(await page.locator("div#droppable"))

   await page.pause()

})