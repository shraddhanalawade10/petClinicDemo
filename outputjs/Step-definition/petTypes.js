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
var petTypesPageObject_1 = require("../pageObject/petTypesPageObject");
var log4jsconfig_1 = require("../config/log4jsconfig");
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var homeObj = new homePageObject_1.HomePageObject();
var globalObj = new globalPageObject_1.GlobalPageObject();
var petTypeObj = new petTypesPageObject_1.petTypesPageObject();
cucumber_1.Given('User is navigating to Home page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Pet Type tab', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickPetTypesMenu()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(1000)];
                case 2:
                    _a.sent();
                    return [4, petTypeObj.verifyPetTypesPage()];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Pet Types page where he can see the list of Pet Types and edit, delete, add and home are enabled or not', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, petTypeObj.verifyButtons()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is navigating to PetClinic home page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Pet Type tab and then clicks on Add button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickPetTypesMenu()];
                case 1:
                    _a.sent();
                    return [4, petTypeObj.addPetTypes()];
                case 2:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to page where he can provide {string} and click on Save button', function (petname) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, petTypeObj.enterPetName({ petname: petname })];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    globalObj.getRefresh();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be directed to Pet Types page where he can see newly added Pet type', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, petTypeObj.verifyPetTypeList()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [4, log4jsconfig_1.log4jsconfig.Log().debug("New PetType added successfully..!!!")];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is navigating to PetClinic welcome page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Pet Type tab and then clicks on Edit button of particular PetType', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickPetTypesMenu()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(3000)];
                case 2:
                    _a.sent();
                    return [4, petTypeObj.editPetTypes()];
                case 3:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 4:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User shoule be navigated to Edit Pet Type page where he can edit the name of PetType as {string}', function (newPetType) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, petTypeObj.verifyEditPetTypesPage()];
                case 1:
                    _a.sent();
                    return [4, petTypeObj.enterNewPetName(newPetType)];
                case 2:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User click on Update button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, petTypeObj.clickonUpdate()];
                case 1:
                    _a.sent();
                    protractor_1.browser.refresh();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Pet Types page where he can see updated name of Pet Type', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    globalObj.getRefresh();
                    return [4, petTypeObj.goToPetType()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(3000)];
                case 2:
                    _a.sent();
                    return [4, log4jsconfig_1.log4jsconfig.Log().info("PetType present after editing PetType::")];
                case 3:
                    _a.sent();
                    return [4, petTypeObj.verifyPetTypeList()];
                case 4:
                    _a.sent();
                    return [4, log4jsconfig_1.log4jsconfig.Log().debug("PetType edited Successfully")];
                case 5:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is navigating to Welcome page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Pet Type tab and then clicks on Delete button of particular pet Type', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickPetTypesMenu()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(3000)];
                case 2:
                    _a.sent();
                    return [4, petTypeObj.deletePetType()];
                case 3:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('That particular Pet Type should get deleted from the list', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("PetType present after deleting PetType::");
                    return [4, log4jsconfig_1.log4jsconfig.Log().info("PetType present after deleting PetType::")];
                case 1:
                    _a.sent();
                    return [4, petTypeObj.verifyPetTypeList()];
                case 2:
                    _a.sent();
                    return [4, log4jsconfig_1.log4jsconfig.Log().debug("PetType deleted Successfully")];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is on Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            return [2];
        });
    });
});
cucumber_1.When('User clicks on Pet Type tab and then clicks on Home button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, homeObj.clickPetTypesMenu()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(3000)];
                case 2:
                    _a.sent();
                    return [4, petTypeObj.goToHome()];
                case 3:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigated to Home page of Pet Clinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, pagetitle;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = expect("Welcome").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    pagetitle = globalObj.getPageTitleText();
                    pagetitle.then(function (txt) {
                        console.log("Current page Title(Welcome page) :-" + txt);
                        log4jsconfig_1.log4jsconfig.Log().debug("Current page Title(Welcome page) :-" + txt);
                    });
                    protractor_1.browser.sleep(1000);
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwLWRlZmluaXRpb24vcGV0VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUM3QywrREFBOEQ7QUFDOUQsbUVBQWtFO0FBQ2xFLHlDQUFxQztBQUNyQyxrRUFBNEM7QUFDNUMsdUVBQXNFO0FBQ3RFLHVEQUFzRDtBQUV0RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUVyQixJQUFBLHlEQUFpQixDQUF5QjtBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQ3ZDLElBQUksVUFBVSxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztBQUcxQyxnQkFBSyxDQUFDLDJEQUEyRCxFQUFFOzs7WUFDL0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Q0FDOUQsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFOzs7O3dCQUNoQyxXQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQztvQkFDbEMsV0FBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUM7b0JBQzFCLFdBQU0sVUFBVSxDQUFDLGtCQUFrQixFQUFFLEVBQUE7O29CQUFyQyxT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