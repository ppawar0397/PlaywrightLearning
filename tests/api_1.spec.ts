import { test, expect } from "@playwright/test"
import { ENV } from "../playwright.config"
import { faker } from "@faker-js/faker"

let userid = 0
let url = "https://gorest.co.in/public/v2/users/"

test.describe.serial("Go Rest Api example", () => {
    test("create a new user", async ({ request }) => {

        let email = faker.internet.email()
        let resp = await request.post(url, {
            headers: {
                "Authorization": `Bearer ${ENV.API_Token}`,
                "Content-Type": "application/json"
            },
            data: {
                "name": "srinivas gudapati",
                "email": email,
                "gender": "male",
                "status": "active"
            },

        })

        let resbody = await resp.json()
        userid = resbody.id
        console.log("===========Response for Create user==================")
        console.log(resbody)
        console.log(resp.status())
    })
    test("Get the user details", async ({ request }) => {
        let resp = await request.get(`${url}${userid}`, {
            headers: {
                "Authorization": `Bearer ${ENV.API_Token}`,
                "Content-Type": "application/json"
            }
        })

        let resbody = await resp.json()
        console.log("===========Response for Get user==================")
        console.log(resbody)
        console.log(resp.status())
        expect(resp.status()).toBe(200)
        expect(resbody.name).toBe("srinivas gudapati")

    })
})

///create read update delete    (CRUD)