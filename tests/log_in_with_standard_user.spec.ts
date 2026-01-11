import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Add to cart and Checkout', async({page})=>{

    await allure.step('Open Login Page', async()=>{
        await page.goto('https://www.saucedemo.com/');
    });

    await allure.step('Login Step', async()=>{

    await page.getByRole('textbox', {name: 'Username'}).click();
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).click();
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();
        
    }); 

    await allure.step('Reset App', async()=>{

    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('link', {name: 'Reset App State'}).click();

    });

    await allure.step('Add Items to Cart', async()=>{
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    });


    await allure.step('Checkout Process', async()=>{
    await page.locator('#shopping_cart_container').click();

    await page.getByRole('button', {name: 'Checkout'}).click();

    await page.getByRole('textbox', {name: 'First Name'}).click();
    await page.getByRole('textbox', {name: 'First Name'}).fill('Kamal Khan');
    await page.getByRole('textbox', {name: 'Last Name'}).click();
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Khan');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).click();
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('1000');
    await page.getByRole('button', {name: 'Continue'}).click();

    await expect(page.locator('.inventory_item_name').nth(0)).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.inventory_item_name').nth(1)).toHaveText('Sauce Labs Bike Light');
    await expect(page.locator('.inventory_item_name').nth(2)).toHaveText('Sauce Labs Bolt T-Shirt');

    await expect(page.getByText('60.45')).toBeVisible();

    });
    
    
    

    await allure.step('Finish Order', async()=>{
    await page.getByRole('button', {name:'Finish'}).click();

    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    
    await page.getByRole('button', {name: 'Back Home'}).click();

    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('link', {name: 'Reset App State'}).click();
    });

    
    await allure.step('Logout Step', async()=>{
    await page.getByRole('link', {name: 'Logout'}).click();
    });
    



} );

