import { Given, When, Then } from "cucumber";
import { HomePageObject } from "../pageObject/homePageObject";
import { GlobalPageObject } from "../pageObject/globalPageObject";
import { browser } from "protractor";
import testData from "../testData/testData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(90 * 1000);

let homeObj = new HomePageObject();
let globalObj = new GlobalPageObject();

//Scenario 1 : Verify that User is able to navigate to Petclinic application homepage
Given('User navigates to Petclinic url', async function () {
    homeObj.openBrowser(testData.testData.baseURLData.baseURL);
    browser.sleep(5000);
    // logHelper.Log().debug("NewLastEntryDetails: " + newEntryDetails);
});

Then('User sees Welcome to Petclinic message on homepage', async function () {
    await expect(true).to.equal(await homeObj.displayWelcomeMsg());
});

Then('Verify the welcome message of PetClinic application', async function () {
    await expect("SpringPetclinicAngular").to.equal(await homeObj.getPageTitle());
});


//Scenario 2 : Verify that User is able to see Five menus on homepage
Given('User is on Petclinic home page', async function () {
    await expect("Welcome").to.equal(await globalObj.getPageTitleText());
});

Then('User sees five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties', async function () {
    await expect(testData.testData.homePageMenus.homeTab).to.equal(await homeObj.getHomeMenuText());
    await expect(testData.testData.homePageMenus.ownersTab).to.equal(await homeObj.getOwnersText());
    await expect(testData.testData.homePageMenus.VetTab).to.equal(await homeObj.getVeterinariansText());
    await expect(testData.testData.homePageMenus.petTypesTab).to.equal(await homeObj.getPetTypesText());
    await expect(testData.testData.homePageMenus.specialitiesTab).to.equal(await homeObj.getSpecialtiesText());
});