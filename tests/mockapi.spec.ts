import { test } from "@playwright/test"

test("mock api example 1", async ({ page }) => {
    await page.route("**/public/v2/users/", async (r) => {
        r.continue({ url: "https://www.facebook.com" })
    })

    await page.goto("https://gorest.co.in/public/v2/users/")
    await page.pause()

})

test("mock api example 2", async ({ page }) => {
    await page.route("**/public/v2/users/", async (r) => {
        r.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                userid: "100",
                name: "manish",  
                gender: "male",
                status: "active"
            })
        })
    })

    await page.goto("https://gorest.co.in/public/v2/users/")
    await page.pause()

})

test("mock api example 3", async ({ page }) => {
    await page.route("**/public/v2/users/*", async (r) => {

        let resp = await r.fetch()
        let b = await resp.json()
        b.name = "manish"
        b.status = "Active"

        r.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ b })
        })

    })
    await page.goto("https://gorest.co.in/public/v2/users/8640915")
    await page.pause()

})