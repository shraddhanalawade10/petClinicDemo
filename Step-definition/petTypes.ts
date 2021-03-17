import { Given, When, Then } from "cucumber";
import { HomePageObject } from "../pageObject/homePageObject";
import { GlobalPageObject } from "../pageObject/globalPageObject";
import { browser } from "protractor";
import testData from "../testData/testData";
import { petTypesPageObject } from "../pageObject/petTypesPageObject";
import { log4jsconfig } from "../config/log4jsconfig";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(90 * 1000);

let homeObj = new HomePageObject();
let globalObj = new GlobalPageObject();
let petTypeObj = new petTypesPageObject();

//Scenario 1 : Pet Type
Given('User is navigating to Home page of Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Pet Type tab', async function () {
    await homeObj.clickPetTypesMenu();
    await browser.sleep(1000);
    await petTypeObj.verifyPetTypesPage();
});

Then('User should be navigated to Pet Types page where he can see the list of Pet Types and edit, delete, add and home are enabled or not', async function () {
    await petTypeObj.verifyButtons();
});

//Scenario 2 : Add Pet Types
Given('User is navigating to PetClinic home page', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Pet Type tab and then clicks on Add button', async function () {
    await homeObj.clickPetTypesMenu();
    await petTypeObj.addPetTypes();
    await browser.sleep(2000);
});

Then('User should be navigated to page where he can provide {string} and click on Save button', async function (petname: any) {
    await petTypeObj.enterPetName({ petname });
    await browser.sleep(2000);
    globalObj.getRefresh();
});

Then('User should be directed to Pet Types page where he can see newly added Pet type', async function () {
    await petTypeObj.verifyPetTypeList();
    browser.sleep(2000);
    await log4jsconfig.Log().debug("New PetType added successfully..!!!");
    browser.sleep(3000);
});

//Scenario 3 : Edit Pet Types
Given('User is navigating to PetClinic welcome page', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Pet Type tab and then clicks on Edit button of particular PetType', async function () {
    await homeObj.clickPetTypesMenu();
    await browser.sleep(3000);
    await petTypeObj.editPetTypes();
    await browser.sleep(2000);
});

Then('User shoule be navigated to Edit Pet Type page where he can edit the name of PetType as {string}', async function (newPetType: any) {
    await petTypeObj.verifyEditPetTypesPage();
    await petTypeObj.enterNewPetName(newPetType);
    await browser.sleep(2000);
});

Then('User click on Update button', async function () {
    await petTypeObj.clickonUpdate();
    browser.refresh();
    browser.sleep(2000);
});

Then('User should be navigated to Pet Types page where he can see updated name of Pet Type', async function () {
    globalObj.getRefresh();
    await petTypeObj.goToPetType();
    await browser.sleep(3000);
    await log4jsconfig.Log().info("PetType present after editing PetType::");
    await petTypeObj.verifyPetTypeList();
    await log4jsconfig.Log().debug("PetType edited Successfully");
});

//Scenario 4 : Delete Pet Types
Given('User is navigating to Welcome page of Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Pet Type tab and then clicks on Delete button of particular pet Type', async function () {
    await homeObj.clickPetTypesMenu();
    await browser.sleep(3000);
    await petTypeObj.deletePetType();
    browser.sleep(3000);
});

Then('That particular Pet Type should get deleted from the list', async function () {
    console.log("PetType present after deleting PetType::");
    await log4jsconfig.Log().info("PetType present after deleting PetType::");
    await petTypeObj.verifyPetTypeList();
    await log4jsconfig.Log().debug("PetType deleted Successfully");
});

//Scenario 5 : Validation of Home button
Given('User is on Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Pet Type tab and then clicks on Home button', async function () {
    await homeObj.clickPetTypesMenu();
    await browser.sleep(3000);
    await petTypeObj.goToHome();
    browser.sleep(2000);
});

Then('User should be navigated to Home page of Pet Clinic application', async function () {
    await expect("Welcome").to.equal(await globalObj.getPageTitleText());
    let pagetitle = globalObj.getPageTitleText();      //promised implementation
    pagetitle.then(function (txt) {
        console.log("Current page Title(Welcome page) :-" + txt);
        log4jsconfig.Log().debug("Current page Title(Welcome page) :-" + txt);
    });
    browser.sleep(1000);
});