import { Given, When, Then } from "@cucumber/cucumber";
import myaccountPage from "../pageobjects/myaccount.page";
import productPage from "../pageobjects/product.page";
import { expect } from "chai";

Given(/^I am signed in with created user credentials$/, async () => {
   let myaccountlinktext = await $("//span[.='My account']");
   await myaccountlinktext.waitForExist({ timeout: 2000 });
   expect(await myaccountPage.btnMyAccount.isDisplayed()).to.equal(true);
});

When(/^I add product (.*) to cart$/, async (productName) => {
   await myaccountPage.clickOnDressesTab();
   await $("//a[@class='product-name'][@title='" + productName + "']").scrollIntoView();
   await $("//a[@class='product-name'][@title='" + productName + "']").click();
   await productPage.clickOnAddToCart();
});

Then(/^I navigate to payments page$/, async () => {
   await browser.pause(30000);
   let proceedToCheckout = await $("//a[contains(@title,'Proceed to checkout')]");
   proceedToCheckout.click();
   proceedToCheckout = await $('//*[@id="center_column"]/p[2]/a[1]/span');
   await proceedToCheckout.scrollIntoView();
   await proceedToCheckout.click();
   proceedToCheckout = await $('//*[@id="center_column"]/form/p/button/span');
   await proceedToCheckout.click();
   let termsOfService = await $("#cgv");
   await termsOfService.click();
   proceedToCheckout = await $("//button[@name='processCarrier']");
   await proceedToCheckout.click();
   expect(await $("//span[contains(text(),'Your payment method')]").isDisplayed()).to.equal(true);
});

Then(/^Verify (.*) Product details$/, async (productName) => {
   expect(await $("//p[@class='product-name']/a[.='" + productName + "']").isDisplayed()).to.equal(true);
});
