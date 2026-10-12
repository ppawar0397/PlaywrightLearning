import {test} from "@playwright/test"

test("Handle a tab window", async({page})=>{
   await page.goto("https://demo.automationtesting.in/Windows.html")

   const [p2]=await Promise.all([
      page.waitForEvent("popup"),
      page.locator("button.btn.btn-info").nth(0).click()
   ])

   await p2.getByText("Downloads").click()
   await p2.getByText("4.47.0 (August 10, 2026)").nth(1).click()
   await page.bringToFront()
   await page.getByText("Home").click()
   await page.pause()
})


test("Handle a new window", async({page})=>{
   await page.goto("https://demo.automationtesting.in/Windows.html")
   await page.getByText("Open New Seperate Windows").click()

   const [p2]=await Promise.all([
      page.waitForEvent("popup"),
      page.locator("button.btn.btn-primary").nth(0).click()
   ])

   await p2.getByText("Downloads").click()
   await p2.getByText("4.47.0 (August 10, 2026)").nth(1).click()
   await page.bringToFront()
   await page.getByText("Home").click()
   await page.pause()
})