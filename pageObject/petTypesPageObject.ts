import { ExpectedConditions, element, browser, by, $$, ElementFinder } from 'protractor';
import { log4jsconfig } from "../config/log4jsconfig";
const { expect } = require('chai');

var expCondition = ExpectedConditions;


export class petTypesPageObject {

    private petTypeTab = element(by.css('ul.nav.navbar-nav>li:nth-child(4)'));
    private petPage = element(by.css('.container.xd-container > h2'));
    private addPetButton = element(by.buttonText('Add'));
    private addName = element(by.id('name'));
    private savePet = element(by.css("button[type='submit']"));
    private petList = element(by.css('.table.table-striped tbody'));
    private petList1 = element.all(by.css('tbody tr'));
    private deletePetButon = element(by.buttonText('Delete'));
    private homeButton = element(by.buttonText('Home'));
    private firstPet = element(by.css('tbody tr td'));
    private editPetButon = element(by.buttonText('Edit'));
    private editPageTitle = element(by.css('.container.xd-container > h2'));
    private addnewName = element(by.id('name'));
    private updatePet = element(by.css("button[type='submit']"));

    public async goToPetType() {
        await this.petTypeTab.click();
        await log4jsconfig.Log().debug("Click on PetType tab");
        const status = await this.addPetButton.isEnabled();
        expect(status).to.equal(true);
        await log4jsconfig.Log().debug("Add Button is enable :-) ");

        const status1 = await this.homeButton.isEnabled();
        expect(status1).to.equal(true);
        await log4jsconfig.Log().debug("Home Button is enable :-) ");

    }

    public async goToHome() {
        await this.homeButton.click();
        await log4jsconfig.Log().debug("Home button is clickable :-) ");
        await log4jsconfig.Log().debug("Go to the Home Page");
    }

    public async verifyPetTypesPage() {
        await this.petPage.getAttribute('innerText').then((title) => {
            expect(title).to.equal('Pet Types');
            console.log("Current page title(Pet Types) :- " + title);
            log4jsconfig.Log().debug("Current page title(Pet Types) :- " + title);
        })
    }

    public async verifyButtons() {
        await this.editPetButon.getAttribute('innerText').then((edittitle) => {
            expect(edittitle).to.equal('Edit');
            log4jsconfig.Log().debug("Edit button is enabled");
        })
        await this.deletePetButon.getAttribute('innerText').then((deletetitle) => {
            expect(deletetitle).to.equal('Delete');
            log4jsconfig.Log().debug("Delete button is enabled");
        })
        await this.addPetButton.getAttribute('innerText').then((addtitle) => {
            expect(addtitle).to.equal('Add');
            log4jsconfig.Log().debug("Add button is enabled");
        })
        await this.homeButton.getAttribute('innerText').then((hometitle) => {
            expect(hometitle).to.equal('Home');
            log4jsconfig.Log().debug("Home button is enabled");
        })
    }

    public async addPetTypes() {
        await this.addPetButton.click();
    }

    public async enterPetName({ petname }: { petname: any }) {
        await this.addName.sendKeys(petname);
        // await log4jsconfig.Log().debug("Newly added PetType name :- ", +petname);
        browser.sleep(4000);
        await this.savePet.click();
    }

    public async verifyPetTypeList() {
        let table = element(by.css('.table.table-striped tbody'));
        let row = table.$$("tr");
        let count = await row.count();
        // console.log("No of pet present-- " + count);
        await log4jsconfig.Log().debug("Number of PetTypes present in the list are - " + count);
        browser.sleep(3000);
        for (let i = 0; i < count; i++) {
            let firstTD = row.get(i).$$("td");
            let firstdata: ElementFinder = firstTD.get(0);
            browser.wait(expCondition.presenceOf(firstdata), 5000);
            /*await firstdata.element(by.name('pettype_name')).getAttribute('value').then((title) => {
                //console.log("Names of PetTypes from the list - " + title)
                log4jsconfig.Log().debug("Names of PetTypes from the list - " + title);
            })*/
        }
    }

    public async deletePetType() {
        browser.sleep(3000);
        browser.refresh();
        await this.firstPet.element(by.name('pettype_name')).getAttribute('value').then((petName) => {
            console.log("Deleted PetType Name is :- " + petName);
            log4jsconfig.Log().debug("Deleted PetType Name is :- " + petName);
        })
        browser.sleep(2000);
        await this.deletePetButon.click();
        await log4jsconfig.Log().debug("Delete PetType");
        browser.sleep(5000);
    }

    public async editPetTypes() {
        await this.editPetButon.click();
    }

    public async verifyEditPetTypesPage() {
        await this.editPageTitle.getAttribute('innerText').then((edittitle) => {
            expect(edittitle).to.equal('Edit Pet Type');
            console.log("Current page title(Edit Pet Types) :- " + edittitle);
            log4jsconfig.Log().debug("Current page title(Edit Pet Types) :- " + edittitle);
        })
    }

    public async enterNewPetName(newPetType) {
        browser.sleep(2000);
        await this.addnewName.getAttribute('innerText').then((oname) => {
            console.log("Old PetType Name is :- " + oname);
            log4jsconfig.Log().info("Edit PetType Page Verify - " + oname);
        })
        browser.sleep(3000);
        await this.addnewName.clear();
        browser.sleep(3000);
        await this.addnewName.sendKeys(newPetType);
        await log4jsconfig.Log().debug("Updated Pet Type name is :- " + newPetType);
        browser.sleep(2000);
    }

    public async clickonUpdate() {
        await this.updatePet.click();
    }
}





