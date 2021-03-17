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
var veterinarianPageObject_1 = require("../pageObject/veterinarianPageObject");
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var expCondition = protractor_1.ExpectedConditions;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var homeObj = new homePageObject_1.HomePageObject();
var globalObj = new globalPageObject_1.GlobalPageObject();
var ownersObj = new ownersPageObject_1.OwnersPageObject();
var veterinarianObj = new veterinarianPageObject_1.VeterinarianPageObject();
cucumber_1.Given('User directs to the Home page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Veterinarian tab and selects ALL dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickVeterinariansMenu()];
                case 1:
                    _a.sent();
                    return [4, homeObj.clickAllVeterinariansMenu()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Veterinarian page where he can see the list of Veterinarian', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, pagetitle;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ownersObj.waitBrowser();
                    _b = (_a = expect("Veterinarians").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    pagetitle = globalObj.getPageTitleText();
                    pagetitle.then(function (txt) {
                        console.log("Current page Title(Veterinarians) :-" + txt);
                        log4jsconfig_1.log4jsconfig.Log().debug("Current page Title(Veterinarians) :-" + txt);
                    });
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User directs to the Welcome page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Veterinarian tab and selects Add New dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickVeterinariansMenu()];
                case 1:
                    _a.sent();
                    return [4, homeObj.clickAddNewVet()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.When('User enters Veterinarian details and clicks on Save Vet button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, veterinarianObj.addNewOwnerInfo()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Veterinarian page and where newly added Veterinarian should get saved', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickVeterinariansMenu()];
                case 1:
                    _a.sent();
                    return [4, homeObj.clickAllVeterinariansMenu()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [4, veterinarianObj.allVenteinansTiltle()];
                case 3:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [4, veterinarianObj.newlyAddedVenDetails()];
                case 4:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User directs to the Pet Clinic application url', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on back button from New Veterinarian page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, veterinarianObj.clickVenBackButton()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmV0ZXJpbmFyaWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcC1kZWZpbml0aW9uL3ZldGVyaW5hcmlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZDO0FBQzdDLCtEQUE4RDtBQUM5RCxtRUFBa0U7QUFDbEUseUNBQTZEO0FBQzdELGtFQUE0QztBQUM1QyxtRUFBa0U7QUFDbEUsdURBQXNEO0FBQ3RELCtFQUE4RTtBQUU5RSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLFlBQVksR0FBRywrQkFBa0IsQ0FBQztBQUNoQyxJQUFBLHlEQUFpQixDQUF5QjtBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQ3ZDLElBQUksU0FBUyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUN2QyxJQUFJLGVBQWUsR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7QUFHbkQsZ0JBQUssQ0FBQyx5REFBeUQsRUFBRTs7O1lBQzdELE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O0NBQzlELENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrREFBK0QsRUFBRTs7Ozt3QkFDbEUsV0FBTSxPQUFPLENBQUMsc0JBQXNCLEVBQUUsRUFBQTs7b0JBQXRDLFNBQXNDLENBQUM7b0JBQ3ZDLFdBQU0sT0FBTyxD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