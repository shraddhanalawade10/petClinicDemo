import { ElementFinder, element, by, ElementArrayFinder, browser, ExpectedConditions } from "protractor";

var expCondition = ExpectedConditions;

export class HomePageObject {
    private welcomeMsg = element(by.css("app-welcome h1"));
    private homeMenu = element(by.css("[ng-reflect-router-link='welcome']"));
    private owners = element(by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
    private veterinarians = element(by.css("ul.navbar-nav li.dropdown:nth-child(3)"));
    private petTypes = element(by.css('ul.nav.navbar-nav>li:nth-child(4)'));
    private specialties = element(by.css("[routerlink='/specialties']"));
    private addNewOwner = element(by.css("[routerlink='/owners/add']"));
    private allVeterinarians = element(by.css("[ng-reflect-router-link='/vets']"));
    private allOwner = element(by.css('ul.dropdown-menu>li:nth-child(1)>a'));
    private addVetButton = element(by.css('[href="/petclinic/vets/add"]'));

    public openBrowser(url: string) {
        browser.get(url);
        browser.wait(expCondition.presenceOf(this.welcomeMsg), 10000);
    }

    public async getPageTitle() {
        return await browser.getTitle();
    }

    public async displayWelcomeMsg() {
        return await this.welcomeMsg.isDisplayed();
    }

    public async getHomeMenuText() {
        return await this.homeMenu.getText();
    }

    public async getOwnersText() {
        return await this.owners.getText();
    }

    public async getVeterinariansText() {
        return await this.veterinarians.getText();
    }

    public async getPetTypesText() {
        return await this.petTypes.getText();
    }

    async getSpecialtiesText() {
        return await this.specialties.getText();
    }

    clickOwnersMenu() {
        return this.owners.click();
    }

    clickOwnersAllMenu() {
        return this.allOwner.click();
    }

    clickAddNewOwner() {
        return this.addNewOwner.click();
    }

    clickPetTypesMenu() {
        return this.petTypes.click();
    }

    clickAddPetTypeButton() {
        return this.addVetButton.click();
    }

    clickVeterinariansMenu() {
        return this.veterinarians.click();
    }

    clickAllVeterinariansMenu() {
        return this.allVeterinarians.click();
    }

    clickAddNewVet() {
        return this.addVetButton.click();
    }
}