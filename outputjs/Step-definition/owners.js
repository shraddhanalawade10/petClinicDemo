"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var homePageObject_1 = require("../pageObject/homePageObject");
var globalPageObject_1 = require("../pageObject/globalPageObject");
var protractor_1 = require("protractor");
var testData_1 = __importDefault(require("../testData/testData"));
var ownersPageObject_1 = require("../pageObject/ownersPageObject");
var log4jsconfig_1 = require("../config/log4jsconfig");
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var expCondition = protractor_1.ExpectedConditions;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var homeObj = new homePageObject_1.HomePageObject();
var globalObj = new globalPageObject_1.GlobalPageObject();
var ownersObj = new ownersPageObject_1.OwnersPageObject();
cucumber_1.Given('User navigates to Petclinic home page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            protractor_1.browser.sleep(2000);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Owners tab and selects ALL dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickOwnersMenu()];
                case 1:
                    _a.sent();
                    return [4, homeObj.clickOwnersAllMenu()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Owners page where he can see the list of owners', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ownersObj.waitBrowser();
                    _b = (_a = expect("Owners").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User navigates to Petclinic welcome page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            protractor_1.browser.sleep(2000);
            return [2];
        });
    });
});
cucumber_1.Given('User is on Welcome page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            protractor_1.browser.sleep(2000);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Owners tab and selects Add New dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickOwnersMenu()];
                case 1:
                    _a.sent();
                    return [4, homeObj.clickAddNewOwner()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User enter owners details {string} {string} {string} {string} {string} and click on Add Owner button to add new owner', function (FirstName, LastName, Address, City, Telephone) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, ownersObj.addNewOwnerDetails({ FirstName: FirstName, LastName: LastName, Address: Address, City: City, Telephone: Telephone })];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(9000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Owners page where newly added owner should get saved', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    ownersObj.waitBrowser();
                    return [4, homeObj.clickOwnersMenu()];
                case 1:
                    _e.sent();
                    return [4, homeObj.clickOwnersAllMenu()];
                case 2:
                    _e.sent();
                    _b = (_a = expect("Owners").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 3: return [4, _b.apply(_a, [_e.sent()])];
                case 4:
                    _e.sent();
                    globalObj.getRefresh();
                    globalObj.waitTillVisible();
                    _d = (_c = expect(testData_1.default.testData.ownersData.expectedData).to).equal;
                    return [4, globalObj.getNewOwnersEntryDetails()];
                case 5: return [4, _d.apply(_c, [_e.sent()])];
                case 6:
                    _e.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is on Petclinic welcome page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            protractor_1.browser.sleep(2000);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on back button from New Owners page', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, pagetitle;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4, ownersObj.clickOwnersBackButton()];
                case 1:
                    _c.sent();
                    _b = (_a = expect("Owners").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 2: return [4, _b.apply(_a, [_c.sent()])];
                case 3:
                    _c.sent();
                    pagetitle = globalObj.getPageTitleText();
                    pagetitle.then(function (txt) {
                        console.log("Current page Title :-" + txt);
                        log4jsconfig_1.log4jsconfig.Log().debug("Current page Title :-" + txt);
                    });
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcC1kZWZpbml0aW9uL293bmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZDO0FBQzdDLCtEQUE4RDtBQUM5RCxtRUFBa0U7QUFDbEUseUNBQTZEO0FBQzdELGtFQUE0QztBQUM1QyxtRUFBa0U7QUFDbEUsdURBQXNEO0FBRXRELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksWUFBWSxHQUFHLCtCQUFrQixDQUFDO0FBQ2hDLElBQUEseURBQWlCLENBQXlCO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDdkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBR3ZDLGdCQUFLLENBQUMsdUNBQXVDLEVBQUU7OztZQUMzQyxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztDQUN2QixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseURBQXlELEVBQUU7Ozs7d0JBQzVELFdBQU0sT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFBOztvQkFBL0IsU0FBK0IsQ0FBQztvQkFDaEMsV0FBTSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7b0JBQWxD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