import {test} from "@playwright/test"

test("Handle frame example", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    const f1=await page.frameLocator("iframe#singleframe")
    await f1.locator("input[type='text']").fill("hello")
    await page.pause()
})

test("Handle nested frame example", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.getByText("Iframe with in an Iframe").click()

    const f1=await page.frameLocator("iframe[src='MultipleFrames.html']")

    const f2=await f1.frameLocator("iframe[src='SingleFrame.html']")
    await f2.locator("//input[@type='text']").fill("hello")
    await page.pause()
})