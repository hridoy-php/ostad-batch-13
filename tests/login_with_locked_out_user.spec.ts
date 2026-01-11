import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
test('Login Test', async({page})=>{

    await allure.step('Open Login Page', async()=>{
    await page.goto('https://www.saucedemo.com/');

    });

    await allure.step('Login with Invalid Credentials', async()=>{
    await page.getByRole('textbox', {name: 'Username'}).click();
    await page.getByRole('textbox', {name: 'Username'}).fill('locked_out_user');
    await page.getByRole('textbox', {name: 'Password'}).click();
    await page.getByRole('textbox', {name: 'Password'}).fill('12345');

    await page.getByRole('button', {name: 'Login'}).click();

    });
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

   

});