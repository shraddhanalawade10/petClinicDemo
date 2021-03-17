import { Given, When, Then } from "cucumber";
import { HomePageObject } from "../pageObject/homePageObject";
import { GlobalPageObject } from "../pageObject/globalPageObject";
import { browser, by, ExpectedConditions } from "protractor";
import testData from "../testData/testData";
import { OwnersPageObject } from "../pageObject/ownersPageObject";
import { log4jsconfig } from "../config/log4jsconfig";
import { VeterinarianPageObject } from "../pageObject/veterinarianPageObject";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var expCondition = ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(90 * 1000);

let homeObj = new HomePageObject();
let globalObj = new GlobalPageObject();
let ownersObj = new OwnersPageObject();
let veterinarianObj = new VeterinarianPageObject();

// Scenario 1 : All dropdown menu
Given('User directs to the Home page of Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Veterinarian tab and selects ALL dropdown menu', async function () {
    await homeObj.clickVeterinariansMenu();
    await homeObj.clickAllVeterinariansMenu();
    browser.sleep(2000);
});

Then('User should be navigated to Veterinarian page where he can see the list of Veterinarian', async function () {
    ownersObj.waitBrowser();
    await expect("Veterinarians").to.equal(await globalObj.getPageTitleText());
    let pagetitle = globalObj.getPageTitleText();      //promised implementation
    pagetitle.then(function (txt) {
        console.log("Current page Title(Veterinarians) :-" + txt);
        log4jsconfig.Log().debug("Current page Title(Veterinarians) :-" + txt);
    });
});

// Scenario 2 : Add Veterinarian
Given('User directs to the Welcome page of Pet Clinic application', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on Veterinarian tab and selects Add New dropdown menu', async function () {
    await homeObj.clickVeterinariansMenu();
    await homeObj.clickAddNewVet();
    browser.sleep(2000);
});

When('User enters Veterinarian details and clicks on Save Vet button', async function () {
    await veterinarianObj.addNewOwnerInfo();
    browser.sleep(2000);
});

Then('User should be navigated to Veterinarian page and where newly added Veterinarian should get saved', async function () {
    await homeObj.clickVeterinariansMenu();
    await homeObj.clickAllVeterinariansMenu();
    browser.sleep(3000);
    await veterinarianObj.allVenteinansTiltle();
    browser.sleep(3000);
    await veterinarianObj.newlyAddedVenDetails();
});


// Scenario 3 : Validation of back button
Given('User directs to the Pet Clinic application url', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
});

When('User clicks on back button from New Veterinarian page', async function () {
    await veterinarianObj.clickVenBackButton();
    browser.sleep(2000);
});