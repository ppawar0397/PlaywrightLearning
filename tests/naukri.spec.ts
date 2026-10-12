import {test} from "@playwright/test"

test("To register on naukri portal", async ({ page }) => {

    await page.on("filechooser", (f)=>{
    f.setFiles("d:\\Sample.docx")
    })

    await page.goto("https://www.naukri.com")
    await page.getByTitle("Jobseeker Register").click()
    await page.getByLabel("Full name").fill("Pranali")
    await page.getByText("I'm experienced").click()
    await page.getByText("Upload Resume").click()

    await page.pause() //it will pause the test run until u resume
})

test("to upload a file", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    await page.waitForTimeout(5000)
    await page.locator("input#input-4").setInputFiles("d:\\Sample.docx")
    await page.pause()

}) 