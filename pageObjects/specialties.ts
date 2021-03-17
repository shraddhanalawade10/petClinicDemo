import { browser } from "protractor";
import { SpecialtiesPageObject } from "../implementation/specialtiesPageObject";
import { describe, it } from 'mocha';
import testdata from "../TestData/data"
import data from "../TestData/data";
declare const allure: any;
const log = require('../config/log4jsconfig').file;

let specialtiesObj = new SpecialtiesPageObject();

describe('Testing Specialties Menu', function () {
    this.beforeAll('Navigate to the Petclinic Home page', async () => {
        await browser.get(data.appUrl);
    });

    it("Verification of Home page title ", async () => {
        await specialtiesObj.titleVerification();
    });

    it("Click on Specialist menu and verification of Specialist page title", async () => {
        await specialtiesObj.navigateToSpecialtiesPage();
        await specialtiesObj.specialtiestitleVerification();
    });

    it("Verification of all buttons", async () => {
        await specialtiesObj.isAddHomeDeleteEditEnable();
        log.debug("All the buttons are enabled");
    });

    it("Click on Add button", async () => {
        await specialtiesObj.clickOnAdd();
    });

    it("Enter Specialist name", async () => {
        await specialtiesObj.enterName();
    });

    it("Verify is save button enabled or not", async () => {
        await specialtiesObj.clickSave();
    });

    afterEach(async () => {
        const png = await browser.takeScreenshot();
        await allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })
});