import {test, expect} from '@playwright/test';
import { allure } from 'allure-playwright';

test('Filter by name', async({page})=>{

    await allure.step('Open Login Page', async()=>{

    await page.goto('https://www.saucedemo.com/');

    });

    await allure.step('Login Step', async()=>{

    await page.getByRole('textbox', {name: 'Username'}).click();
    await page.getByRole('textbox', {name: 'Username'}).fill('performance_glitch_user');
    await page.getByRole('textbox', {name: 'Password'}).click();
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    });

    await allure.step('Reset App State', async()=>{
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('link', {name: 'Reset App State'}).click();
    await page.getByRole('button', {name: 'Close Menu'}).click();
    });

    await allure.step('Select dropdown and Add to cart', async()=>{
    await page.getByRole('combobox', {exact: true}).click();
    await page.getByRole('combobox', {exact:true}).selectOption('za');
    
    await page.getByTestId('add-to-cart-test.allthethings()-t-shirt-(red)').click();
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', {name: 'Checkout'}).click();

    });

    await allure.step('Chekout Process', async()=>{

    await page.getByRole('textbox', {name: 'First Name'}).click();
    await page.getByRole('textbox', {name: 'First Name'}).fill('Kamal');
    await page.getByRole('textbox', {name: 'Last Name'}).click();
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Khan');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).click();
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('1000');
    await page.getByRole('button', {name: 'Continue'}).click();

    });
 
    await allure.step('Validate Items and Finish Order', async()=>{

    await expect(page.locator('.inventory_item_name').nth(0)).toHaveText('Test.allTheThings() T-Shirt (Red)');
    await expect(page.getByText('17.27')).toBeVisible();

    await page.getByRole('button', {name: 'Finish'}).click();
    });

    await allure.step('Order Confirmation', async()=>{
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await page.getByRole('button', {name: 'Back Home'}).click();
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('link', {name: 'Reset App State'}).click();
    });
    
    await allure.step('Logout', async()=>{

    await page.getByRole('link', {name: 'Logout'}).click();
    
    });

    

});
