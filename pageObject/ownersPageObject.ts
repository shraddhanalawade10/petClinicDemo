import { browser, by, element, ExpectedConditions } from "protractor";
import { log4jsconfig } from "../config/log4jsconfig";
const { expect } = require('chai');

var expCondition = ExpectedConditions;

export class OwnersPageObject {

    private firstname = element(by.id('firstName'));
    private lastname = element(by.id('lastName'));
    private address = element(by.id('address'));
    private city = element(by.id('city'));
    private telephone = element(by.id('telephone'));
    private addOwnerButton = element(by.buttonText('Add Owner'));
    private allOwner = element(by.css('ul.dropdown-menu>li:nth-child(1)>a'));
    private ownerName = element(by.xpath("//*[contains(text(),'Saniya Bhaldar')]"));
    private addOwnerFromOwnersPage = element(by.buttonText('Add Owner'));
    private ownersBackButton = element(by.className("btn btn-default"));

    public async addNewOwnerDetails({ FirstName, LastName, Address, City, Telephone }: { FirstName: any; LastName: any; Address: any; City: any; Telephone: any }) {
        let status = await this.addOwnerButton.isEnabled();
        expect(status).to.equal(false);
        await log4jsconfig.Log().debug("Add Button is disabled :-( ");

        await this.firstname.sendKeys(FirstName);
        expect(FirstName).to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("Firstname is greater than 2 characters :- " + FirstName);

        await this.lastname.sendKeys(LastName);
        expect(LastName).to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("Lastname is greater than 2 characters :- " + LastName);

        await this.address.sendKeys(Address);
        expect(Address).to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("Address is greater than 2 characters :- " + Address);

        await this.city.sendKeys(City);
        expect(City).to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("City is greater than 2 characters :- " + City);

        await this.telephone.sendKeys(Telephone);
        expect(Telephone).to.have.lengthOf(10);
        await log4jsconfig.Log().debug("Telephone Number is of 10 digits :- " + Telephone);

        const status1 = await this.addOwnerButton.isEnabled();
        expect(status1).to.equal(true);
        await log4jsconfig.Log().debug("Add Button is enabled now :-) ");
        await this.addOwnerButton.click();
        var b = await this.addOwnerButton.getAttribute('innerText');
        console.log("Save New Owner :- " + b);
        log4jsconfig.Log().debug("Save New Owner button verification :- " + b);
    }

    async clickAllOwnersMenu() {
        return this.allOwner.click();
    }

    clickOwnerName() {
        this.ownerName.click();
    }

    public async waitBrowser() {
        await browser.wait(expCondition.presenceOf(this.ownerName), 10000);
    }

    clickAddOwnerFromOwnersPage() {
        return this.addOwnerFromOwnersPage.click();
    }

    clickOwnersBackButton() {
        return this.ownersBackButton.click();
    }
}


