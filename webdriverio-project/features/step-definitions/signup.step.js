import { Given, When, Then } from "@cucumber/cucumber";
import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";
import authenticationPage from "../pageobjects/createuseraccount.page";
import faker from "faker";
import accountPage from "../pageobjects/myaccount.page";
import { expect } from "chai";
let firstname;
let lastname;
const password = "12345";
let email;

Given(/^I am on the home page$/, async () => {
   await homePage.navitageToLandingPage();
});

Given(/^I am on the My account page$/, async () => {
   expect(await accountPage.btnMyAccount.isDisplayed()).to.equal(true);
});

When(/^I navigate to SignUp page$/, async () => {
   await homePage.navigateToSignInPage();
});

When(/^I navigate to home page$/, async () => {
   await accountPage.navigateToHomePage();
});

When(/^I Sign out from application$/, async () => {
   await homePage.signOutApplication();
   expect(await homePage.btnSignIn.isDisplayed()).to.equal(true);
});

Then(/^Sign in into user account$/, async () => {
   await homePage.navigateToSignInPage();
   await loginPage.loginRegisteredUser(email, password);
});

Then(/^I should create a new user account$/, async () => {
   firstname = faker.name.firstName();
   lastname = faker.name.lastName();
   email = faker.internet.email();
   await loginPage.createAccount(email);
   await authenticationPage.registerUser(
      firstname,
      lastname,
      password,
      faker.address.streetAddress(),
      faker.address.cityName()
   );
   await browser.pause(20000);
});

Then(/^Verify firstname and lastname$/, async () => {
   await homePage.btnSignOut.waitForExist({ timeout: 2000 });
   let username = await $(
      "//a[@title='View my customer account']/span[.='" + firstname + " " + lastname + "']"
   );
   let isExisting = await username.isExisting();
   expect(await isExisting).to.equal(true);
});
