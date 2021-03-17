import { ElementFinder, element, by, ElementArrayFinder, browser, ExpectedConditions } from "protractor";
import { log4jsconfig } from "../config/log4jsconfig";

var expCondition = ExpectedConditions;

export class GlobalPageObject {

    private pageTitle = element(by.css(".container-fluid .xd-container h2"));
    private responseList = element(by.css(".container-fluid[_ngcontent-tad-c107]"));
    private ownersListTbl = element(by.css('table.table-striped tbody'));

    getRefresh() {
        browser.refresh();
    }

    async waitTillVisible() {
        await browser.wait(expCondition.visibilityOf(this.responseList), 10000, 'Taking too long to load');
    }

    async getPageTitleText() {
        return await this.pageTitle.getText();
    }

    async displayPageTitle() {
        var displayPageTitle = await this.pageTitle.isDisplayed();
        return displayPageTitle;
    }

    getResponseListText() {
        return this.responseList.getText();
    }

    async getNewOwnersEntryDetails() {
        await browser.wait(expCondition.visibilityOf(this.ownersListTbl), 20000, 'Taking too long to load');
        let newOwnersEntry = this.ownersListTbl.all(by.tagName("tr")).last();
        browser.executeScript('window.scrollBy(0,2500)');
        let newOwnersEntryDetails = await newOwnersEntry.getText();
        log4jsconfig.Log().debug("NewOwnersEntryDetails: " + newOwnersEntryDetails);
        return newOwnersEntryDetails;
    }

    getEntryCount() {
        let count = this.responseList.all(by.tagName("tr")).count();
        log4jsconfig.Log().debug("RowCount: " + count);
        return count;
    }

}