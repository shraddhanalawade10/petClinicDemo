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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var expCondition = protractor_1.ExpectedConditions;
var HomePageObject = (function () {
    function HomePageObject() {
        this.welcomeMsg = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.homeMenu = protractor_1.element(protractor_1.by.css("[ng-reflect-router-link='welcome']"));
        this.owners = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
        this.veterinarians = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(3)"));
        this.petTypes = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(4)'));
        this.specialties = protractor_1.element(protractor_1.by.css("[routerlink='/specialties']"));
        this.addNewOwner = protractor_1.element(protractor_1.by.css("[routerlink='/owners/add']"));
        this.allVeterinarians = protractor_1.element(protractor_1.by.css("[ng-reflect-router-link='/vets']"));
        this.allOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(1)>a'));
        this.addVetButton = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets/add"]'));
    }
    HomePageObject.prototype.openBrowser = function (url) {
        protractor_1.browser.get(url);
        protractor_1.browser.wait(expCondition.presenceOf(this.welcomeMsg), 10000);
    };
    HomePageObject.prototype.getPageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.getTitle()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.displayWelcomeMsg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.welcomeMsg.isDisplayed()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getHomeMenuText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.homeMenu.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getOwnersText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.owners.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getVeterinariansText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.veterinarians.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getPetTypesText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petTypes.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getSpecialtiesText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.specialties.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.clickOwnersMenu = function () {
        return this.owners.click();
    };
    HomePageObject.prototype.clickOwnersAllMenu = function () {
        return this.allOwner.click();
    };
    HomePageObject.prototype.clickAddNewOwner = function () {
        return this.addNewOwner.click();
    };
    HomePageObject.prototype.clickPetTypesMenu = function () {
        return this.petTypes.click();
    };
    HomePageObject.prototype.clickAddPetTypeButton = function () {
        return this.addVetButton.click();
    };
    HomePageObject.prototype.clickVeterinariansMenu = function () {
        return this.veterinarians.click();
    };
    HomePageObject.prototype.clickAllVeterinariansMenu = function () {
        return this.allVeterinarians.click();
    };
    HomePageObject.prototype.clickAddNewVet = function () {
        return this.addVetButton.click();
    };
    return HomePageObject;
}());
exports.HomePageObject = HomePageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2VPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2hvbWVQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUc7QUFFekcsSUFBSSxZQUFZLEdBQUcsK0JBQWtCLENBQUM7QUFFdEM7SUFBQTtRQUNZLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUMxRSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQzVELHFCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdkUsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDakUsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThC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