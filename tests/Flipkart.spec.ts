import {test} from "@playwright/test"
test("flipkart assignment" ,async({page})=>{
    await page.goto("https://www.flipkart.com/")
    const closeBtn = await page.getByText('✕')
    //span[@role='button'and text()='✕']
    if (await closeBtn.isVisible())
    {
        await closeBtn.click()
    }
    //page.getByTitle('Search for Products, Brands and More').nth(2).click()
    await page.getByTitle('Search for Products, Brands and More').nth(1).fill("mobiles")
    await page.getByTitle('Search for Products, Brands and More').nth(1).press('Enter')
    await page.waitForTimeout(2000)
    await page.locator("(//select[@class='hbnjE2'])[2]").selectOption({value:'20000'})
    const productcount = await page.locator("//div[@class='RG5Slk']").count()//.nth(0).textContent()
    console.log("total Product count is : "+productcount)
    let i=0
    while(i<productcount)
    {
        const productText = await page.locator("//div[@class='RG5Slk']").nth(i).textContent()
        console.log("Product Number ["+i+"] is : "+productText)
        i++
    }
    await page.pause()

})