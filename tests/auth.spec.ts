import {test} from "@playwright/test"

test.use({
   httpCredentials:{
    "username":"admin",
    "password":"admin"
   }
})
test("authentication required popup", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/basic_auth")

    await page.pause()

})