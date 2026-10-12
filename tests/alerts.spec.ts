import {test} from "@playwright/test"

test("Handle simple alert", async({page})=>{
     page.on("dialog",(d)=>{
       console.log(d.message())
       d.accept()
   })
   await page.goto("https://demo.automationtesting.in/Alerts.html")

   await page.getByText("click the button to display an  alert box:").click()
})

test("Handle alert with ok, cancel", async ({page})=>{
 page.on("dialog",(d)=>{
       console.log(d.message())
       d.accept()
   })
   await page.goto("https://demo.automationtesting.in/Alerts.html")
   await page.getByText("Alert with OK & Cancel ").click()
   await page.getByText("click the button to display a confirm box ").click()
   let msg=await page.locator("p#demo").textContent()
   console.log(msg)
})

test("Handle alert with textbox, ok, cancel", async ({page})=>{
 page.on("dialog",(d)=>{
       console.log(d.message())
       d.accept("vijay")
   })
   await page.goto("https://demo.automationtesting.in/Alerts.html")
   await page.getByText("Alert with Textbox ").click()
   await page.getByText("click the button to demonstrate the prompt box ").click()
   let msg=await page.locator("p#demo1").textContent()
   console.log(msg)
})

///   accept()  : click ok      dismiss(): click cancel     message():read message on the alert    accept("text"): type the text in the alert and click ok