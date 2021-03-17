import { ExpectedConditions, element, browser, by } from 'protractor';
import { log4jsconfig } from "../config/log4jsconfig";
const { expect } = require('chai');

var expCondition = ExpectedConditions;


export class VeterinarianPageObject {
    private verterinansTab = element(by.css('ul.nav.navbar-nav>li:nth-child(3)'));
    private addVenterinans = element(by.css('[href="/petclinic/vets/add"]'));
    private venterinansTitle = element(by.css('.container.xd-container>h2'));
    private vFirstname = element(by.id('firstName'));
    private vLastname = element(by.id('lastName'));
    private vType = element(by.name('specialties'));
    private vDropType = element(by.css('select option:nth-child(3)'));
    private vAllDropType = element.all(by.css('#specialties option'));
    private saveVenterinans = element(by.css("button[type='submit']"));
    private venList = element(by.css('.table.table-striped tbody'));
    private veterinarians = element(by.css('.container-fluid .container.xd-container > h2'));
    private enable = element(by.css('.table.table-striped thead tr'));
    private backButton1 = element(by.css('.btn.btn-default'));

    public async goToVen() {
        await this.verterinansTab.click();
    }

    public async verifyVenteinansTiltle() {
        //await browser.wait(ec.visibilityOf(this.venterinansTitle), 20000, 'Taking too long to load');
        await this.venterinansTitle.getAttribute('innerText').then((title) => {
            expect(title).to.equal('New Veterinarian');
            console.log("Veterinarian page verification :- " + title);
            log4jsconfig.Log().debug("Veterinarian page verification :- " + title);
        })
    }

    public async allVenteinansTiltle() {
        await browser.wait(expCondition.presenceOf(this.veterinarians), 20000, 'Taking too long to load');
        await this.veterinarians.getAttribute('innerText').then((head) => {
            expect(head).to.equal('Veterinarians');
            console.log("All Veterinarian page :- " + head);
            log4jsconfig.Log().debug("Veterinarian page verification :- " + head);
        })
    }

    public async newVen() {
        await browser.wait(expCondition.presenceOf(this.addVenterinans), 30000, 'Taking too long to load');
        log4jsconfig.Log().debug("Click on Add New button to add New Veterinarian");
        await this.addVenterinans.click();
    }

    public async addNewOwnerInfo() {
        await this.vFirstname.sendKeys('Smita');
        expect('Smita').to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("Firstname is greater than 2 character :: Smita");
        await this.vLastname.sendKeys('Khatavkar');
        expect('Khatavkar').to.have.lengthOf.above(2);
        await log4jsconfig.Log().debug("Lastname is greater than 2 character :: Khatavkar");
        browser.sleep(3000);
        await this.vType.click();
        browser.sleep(2000);
        await this.vDropType.click();
        let dcount = await this.vAllDropType.count();
        log4jsconfig.Log().debug("List of Specialist Types - ");
        for (var i = 0; i < dcount; i++) {
            log4jsconfig.Log().debug(await this.vAllDropType.get(i).getText())
            console.log(await this.vAllDropType.get(i).getText());
        }
        browser.sleep(2000);
        log4jsconfig.Log().debug("Enter Fisrt ,last name ,type");
        await this.saveVenterinans.click();
        log4jsconfig.Log().debug("Save Veterinarian");
        // browser.sleep(2000)
        // browser.refresh
        // console.log("Veternarians  ::" +this.venterinansTitle);
        // await browser.wait(ec.presenceOf(this.venterinansTitle),3000)
        /* var b= await this.saveVenterinans.getAttribute('innerText')
         console.log("Save New Ven  ::" +b);
         await browser.wait(ec.presenceOf(this.enable),3000)  */
    }

    public async newlyAddedVenDetails() {
        await browser.wait(expCondition.visibilityOf(this.venList), 20000, 'Taking too long to load');
        let venDetails = this.venList.all(by.tagName('tr')).last();
       // await browser.actions().mouseMove(venDetails).perform();
        let venName = await venDetails.getText();
        const str = venName.split(' ');
        let FN = str[0];
        let LN = str[1];
        let fLN = LN.split('\n');
        let str1 = fLN[0];
        let str2 = fLN[1];
        console.log(str);
        console.log(fLN);
        await browser.wait(expCondition.elementToBeClickable(venDetails), 20000, 'Element taking too long to appear in the DOM');
        await expect('Smita').to.equal(FN);
        await expect('Khatavkar').to.equal(str1);
        await expect('Radiology').to.equal(str2);
        log4jsconfig.Log().debug("Added Veterinarians details verification :- " + FN + " " + str1 + " " + str2);
    }

    public async clickVenBackButton() {
        browser.refresh();
        // await browser.wait(ec.presenceOf(this.backButton1), 20000, 'Element taking too long to appear in the DOM');
        var back = await this.backButton1.getAttribute('innerText');
        expect('< Back').to.equal(back);
        await this.backButton1.click();
        await log4jsconfig.Log().debug("Click on Back Button verification :- " + back);
    }
}
