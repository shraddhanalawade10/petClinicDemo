import { Given, When, Then } from "cucumber";
import { HomePageObject } from "../pageObject/homePageObject";
import { GlobalPageObject } from "../pageObject/globalPageObject";
import { browser, by, ExpectedConditions } from "protractor";
import testData from "../testData/testData";
import { OwnersPageObject } from "../pageObject/ownersPageObject";
import { log4jsconfig } from "../config/log4jsconfig";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var expCondition = ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(90 * 1000);

let homeObj = new HomePageObject();
let globalObj = new GlobalPageObject();
let ownersObj = new OwnersPageObject();

// Scenario 1 : All dropdown menu
Given('User navigates to Petclinic home page', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
    browser.sleep(2000);
});

When('User clicks on Owners tab and selects ALL dropdown menu', async function () {
    await homeObj.clickOwnersMenu();
    await homeObj.clickOwnersAllMenu();
    browser.sleep(2000);
});

Then('User should be navigated to Owners page where he can see the list of owners', async function () {
    ownersObj.waitBrowser();
    await expect("Owners").to.equal(await globalObj.getPageTitleText());
    /* let pagetitle = globalObj.getPageTitleText();      //promised implementation
     pagetitle.then(function (txt) {
         console.log("Current page Title :-" + txt);
         log4jsconfig.Log().debug("Current page Title :-" + txt);
     });*/
});

//Scenario 2 : Add owners
Given('User navigates to Petclinic welcome page', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
    browser.sleep(2000);
});

Given('User is on Welcome page of Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
    browser.sleep(2000);
});

When('User clicks on Owners tab and selects Add New dropdown menu', async function () {
    await homeObj.clickOwnersMenu();
    await homeObj.clickAddNewOwner();
});

When('User enter owners details {string} {string} {string} {string} {string} and click on Add Owner button to add new owner', async function (FirstName: any, LastName: any, Address: any, City: any, Telephone: any) {
    await ownersObj.addNewOwnerDetails({ FirstName, LastName, Address, City, Telephone });
    //await expect(true).to.equal(true);
    browser.sleep(9000);
});

Then('User should be navigated to Owners page where newly added owner should get saved', async function () {
    ownersObj.waitBrowser();
    await homeObj.clickOwnersMenu();
    await homeObj.clickOwnersAllMenu();
    await expect("Owners").to.equal(await globalObj.getPageTitleText());
    globalObj.getRefresh();
    globalObj.waitTillVisible();
    await expect(testData.testData.ownersData.expectedData).to.equal(await globalObj.getNewOwnersEntryDetails());
});

//Scneraio 3 : Validation of back button
Given('User is on Petclinic welcome page', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
    browser.sleep(2000);
});

When('User clicks on back button from New Owners page', async function () {
    await ownersObj.clickOwnersBackButton();
    await expect("Owners").to.equal(await globalObj.getPageTitleText());
    let pagetitle = globalObj.getPageTitleText();      //promised implementation
    pagetitle.then(function (txt) {
        console.log("Current page Title :-" + txt);
        log4jsconfig.Log().debug("Current page Title :-" + txt);
    });
});
