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
var log4jsconfig_1 = require("../config/log4jsconfig");
var expect = require('chai').expect;
var expCondition = protractor_1.ExpectedConditions;
var VeterinarianPageObject = (function () {
    function VeterinarianPageObject() {
        this.verterinansTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(3)'));
        this.addVenterinans = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets/add"]'));
        this.venterinansTitle = protractor_1.element(protractor_1.by.css('.container.xd-container>h2'));
        this.vFirstname = protractor_1.element(protractor_1.by.id('firstName'));
        this.vLastname = protractor_1.element(protractor_1.by.id('lastName'));
        this.vType = protractor_1.element(protractor_1.by.name('specialties'));
        this.vDropType = protractor_1.element(protractor_1.by.css('select option:nth-child(3)'));
        this.vAllDropType = protractor_1.element.all(protractor_1.by.css('#specialties option'));
        this.saveVenterinans = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.venList = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
        this.veterinarians = protractor_1.element(protractor_1.by.css('.container-fluid .container.xd-container > h2'));
        this.enable = protractor_1.element(protractor_1.by.css('.table.table-striped thead tr'));
        this.backButton1 = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
    }
    VeterinarianPageObject.prototype.goToVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.verterinansTab.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.verifyVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.venterinansTitle.getAttribute('innerText').then(function (title) {
                            expect(title).to.equal('New Veterinarian');
                            console.log("Veterinarian page verification :- " + title);
                            log4jsconfig_1.log4jsconfig.Log().debug("Veterinarian page verification :- " + title);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.allVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.veterinarians), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        return [4, this.veterinarians.getAttribute('innerText').then(function (head) {
                                expect(head).to.equal('Veterinarians');
                                console.log("All Veterinarian page :- " + head);
                                log4jsconfig_1.log4jsconfig.Log().debug("Veterinarian page verification :- " + head);
                            })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.newVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.addVenterinans), 30000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("Click on Add New button to add New Veterinarian");
                        return [4, this.addVenterinans.click()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.addNewOwnerInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dcount, i, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4, this.vFirstname.sendKeys('Smita')];
                    case 1:
                        _e.sent();
                        expect('Smita').to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Firstname is greater than 2 character :: Smita")];
                    case 2:
                        _e.sent();
                        return [4, this.vLastname.sendKeys('Khatavkar')];
                    case 3:
                        _e.sent();
                        expect('Khatavkar').to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Lastname is greater than 2 character :: Khatavkar")];
                    case 4:
                        _e.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.vType.click()];
                    case 5:
                        _e.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.vDropType.click()];
                    case 6:
                        _e.sent();
                        return [4, this.vAllDropType.count()];
                    case 7:
                        dcount = _e.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("List of Specialist Types - ");
                        i = 0;
                        _e.label = 8;
                    case 8:
                        if (!(i < dcount)) return [3, 12];
                        _b = (_a = log4jsconfig_1.log4jsconfig.Log()).debug;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 9:
                        _b.apply(_a, [_e.sent()]);
                        _d = (_c = console).log;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 10:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 11;
                    case 11:
                        i++;
                        return [3, 8];
                    case 12:
                        protractor_1.browser.sleep(2000);
                        log4jsconfig_1.log4jsconfig.Log().debug("Enter Fisrt ,last name ,type");
                        return [4, this.saveVenterinans.click()];
                    case 13:
                        _e.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("Save Veterinarian");
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.newlyAddedVenDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var venDetails, venName, str, FN, LN, fLN, str1, str2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.visibilityOf(this.venList), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        venDetails = this.venList.all(protractor_1.by.tagName('tr')).last();
                        return [4, protractor_1.browser.actions().mouseMove(venDetails).perform()];
                    case 2:
                        _a.sent();
                        return [4, venDetails.getText()];
                    case 3:
                        venName = _a.sent();
                        str = venName.split(' ');
                        FN = str[0];
                        LN = str[1];
                        fLN = LN.split('\n');
                        str1 = fLN[0];
                        str2 = fLN[1];
                        console.log(str);
                        console.log(fLN);
                        return [4, protractor_1.browser.wait(expCondition.elementToBeClickable(venDetails), 20000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        return [4, expect('Smita').to.equal(FN)];
                    case 5:
                        _a.sent();
                        return [4, expect('Khatavkar').to.equal(str1)];
                    case 6:
                        _a.sent();
                        return [4, expect('Radiology').to.equal(str2)];
                    case 7:
                        _a.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("Added Veterinarians details verification :- " + FN + " " + str1 + " " + str2);
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.clickVenBackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        return [4, this.backButton1.getAttribute('innerText')];
                    case 1:
                        back = _a.sent();
                        expect('< Back').to.equal(back);
                        return [4, this.backButton1.click()];
                    case 2:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Click on Back Button verification :- " + back)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return VeterinarianPageObject;
}());
exports.VeterinarianPageObject = VeterinarianPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmV0ZXJpbmFyaWFuUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvdmV0ZXJpbmFyaWFuUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNFO0FBQ3RFLHVEQUFzRDtBQUM5QyxJQUFBLCtCQUFNLENBQXFCO0FBRW5DLElBQUksWUFBWSxHQUFHLCtCQUFrQixDQUFDO0FBR3RDO0lBQUE7UUFDWSxtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLHFCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDakUsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2QyxVQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDMUQsaUJBQVksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMxRCxvQkFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENB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