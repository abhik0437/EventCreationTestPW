import {test, expect} from "@playwright/test";

async function login(page, url, username, password){

    await page.goto(url+"/login");
    await page.locator("#email").fill(username);
    await page.locator("#password").fill(password);

    await page.locator("#login-btn").click();


}

test("login  Test", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await login(page,  "https://eventhub.rahulshettyacademy.com", "abhinavk0938@gmail.com", "@bh!Test1993");

    await expect(page.locator('span', {hasText: 'Browse Events'})).toBeVisible();




});
