/*
1) expect(page).toHaveURL()   Page contains correct URL
2) expect(page).toHaveTitle()   Page contains correct title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has correct attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains certain text
9) expect(locator).toHaveValue('value') Input has certain value
10) expect(locator).toHaveCount(value)  List of elements has given length
 */


import {test, expect} from '@playwright/test';
import exp from 'constants';

test ("working with playwright's frequently used assertions", async ({page})=>{
    
    //opening the page
    await page.goto('https://demo.nopcommerce.com/register?');


    //expect(page).toHaveURL() -- checking the page contains correct url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?");

    //expect(page).toHaveTitle() -- checking the page contains correct title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //expect(locator).toBeVisible() --  checking wheter the logo is visible using alter text as locator
    const logo = await page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();
    
    //expect(locator).toBeEnabled() -- checking that an item (search box) is enabled or not
    const searchBox = await page.locator("#small-searchterms");
    await expect(searchBox).toBeEnabled();

    //expect(locator).toBeChecked() -- verifying that a radio button/checkbox is checked or not
    const radioButton = await page.locator("#gender-male");
    await radioButton.click(); //selecting the radio button
    await expect(radioButton).toBeChecked();

    //expect(locator).toHaveAttribute() -- checking that the register button has the type submit
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');
    
    //expect(locator).toHaveText() -- verifying that the page title having exactly same text
    const pageTitle = await page.locator('.page-title h1');
    await expect(pageTitle).toHaveText("Register");

    //expect(locator).toContainText() -- verifyng that the page title contain partial text value
    const pageTitle2 = await page.locator('.page-title h1');
    await expect(pageTitle2).toContainText("Regis");

    //expect(locator).toHaveValue('value') --verifying that the input box contains a certain value
    const emailBox = await page.locator('#Email');
    await emailBox.fill("niazmorshed1494@gmail.com"); //sending value to the input box
    await expect(emailBox).toHaveValue("niazmorshed1494@gmail.com");

    //expect(locator).toHaveCount(value) -- verifying that the mont dropdown has 13 options in the list
    const monthDropdownOptions = await page.locator("select[name='DateOfBirthMonth'] option");
    await expect(monthDropdownOptions).toHaveCount(13);


});