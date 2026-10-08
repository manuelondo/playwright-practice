import { expect, test } from '@playwright/test'

//page = fixture 

test('login to jci', async ({ page }) => {

await page.goto('https://jcibe--eodbprjcts.sandbox.my.site.com/Solution/login')
await page.getByRole('button', {name: 'Log in with User credentials'}).click()
await page.getByRole('textbox', {name: 'Email Address'}).fill('cam.newton.eodbprjcts@jci.com.hn')
await page.getByRole('textbox', {name: 'Password'}).fill('!Ua1Hd7!a%6I*BR#')
await page.getByRole('button',{name: 'Sign In'}).click()

await expect(page.getByRole('button', {name: 'PRODUCTS'})).toBeVisible()

})