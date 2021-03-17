import { by, element } from "protractor";
const expect = require('chai').expect;
const log = require('../config/log4jsconfig').file;
import testdata from "../TestData/data"

export class SpecialtiesPageObject {
    private hometab = element(by.css("a[href='/petclinic/welcome']"));
    private hometitle = element(by.css("app-welcome h1"));
    private specialistButton = element(by.css("a[href='/petclinic/specialties']"));
    private specialtiestitle = element(by.css('div .xd-container h2'));
    private addButton = element(by.cssContainingText('.btn-default', ' Add '));
    private editButton = element.all(by.cssContainingText('.btn-default', 'Edit')).first();
    private homeButton = element(by.cssContainingText('.btn-default', 'Home'));
    private deleteButton = element.all(by.cssContainingText('.btn-default', 'Delete')).first();
    private specaltiesName = element(by.css("#name"));
    private saveButton = element(by.cssContainingText('.btn-default', 'Save'));
    //private firstSpecialty = element.all(by.css('tbody tr td')).first();
    //private table = element(by.css('.table.table-striped tbody'))

    public async navigateToHomepage() {
        await this.hometab.click();
    }

    public async titleVerification() {
        await this.hometitle.getText().then(async (text) => {
            await log.debug(text);
            await expect(text).to.equal("Welcome to Petclinic");
        })
    }

    public async navigateToSpecialtiesPage() {
        await this.specialistButton.click();
    }

    public async specialtiestitleVerification() {
        await this.specialtiestitle.getText().then(async (text) => {
            await log.debug(text);
            await expect(text).to.equal("Specialties");
        })
    }

    public async isAddHomeDeleteEditEnable() {
        let status = await this.addButton.isEnabled();
        expect(status).to.equal(true);

        let status1 = await this.homeButton.isEnabled();
        expect(status1).to.equal(true);

        let status2 = await this.editButton.isEnabled();
        expect(status2).to.equal(true);

        let status3 = await this.deleteButton.isEnabled();
        expect(status3).to.equal(true);

    }

    public async clickOnAdd() {
        await this.addButton.click();

    }

    public async enterName() {
        await this.specaltiesName.sendKeys(testdata.testData.specialtiesData.Name);

    }

    public async clickSave() {
        let status = await this.saveButton.isEnabled();
        expect(status).to.equal(true);
        await this.saveButton.click();

    }
}