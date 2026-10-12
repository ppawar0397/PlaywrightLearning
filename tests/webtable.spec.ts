import {test} from "@playwright/test"

test("Read data from webtable", async({page})=>{

   await page.goto("https://www.chittorgarh.com/")

   await page.getByText("More NCD Public Issues ...").scrollIntoViewIfNeeded()

   await page.waitForTimeout(3000)

   let table=await page.locator("(//table[@class='table my-0 striped table-hover align-middle'])[2]/tbody")

   let rows=await table.locator("//tr").all()

   console.log(rows.length)

   let data

   for(let r=1;r<=rows.length;r++)

   {

      data= await table.locator("//tr["+r+"]/td[1]").textContent()

      console.log(data)

   }

   let rowdata=await table.locator("//tr").filter({hasText:'Indel Money'})

   await rowdata.getByText("Indel Money").click()

   await page.pause()

})