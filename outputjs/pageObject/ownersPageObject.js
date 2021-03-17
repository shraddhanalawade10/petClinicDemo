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
var OwnersPageObject = (function () {
    function OwnersPageObject() {
        this.firstname = protractor_1.element(protractor_1.by.id('firstName'));
        this.lastname = protractor_1.element(protractor_1.by.id('lastName'));
        this.address = protractor_1.element(protractor_1.by.id('address'));
        this.city = protractor_1.element(protractor_1.by.id('city'));
        this.telephone = protractor_1.element(protractor_1.by.id('telephone'));
        this.addOwnerButton = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.allOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(1)>a'));
        this.ownerName = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Saniya Bhaldar')]"));
        this.addOwnerFromOwnersPage = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.ownersBackButton = protractor_1.element(protractor_1.by.className("btn btn-default"));
    }
    OwnersPageObject.prototype.addNewOwnerDetails = function (_a) {
        var FirstName = _a.FirstName, LastName = _a.LastName, Address = _a.Address, City = _a.City, Telephone = _a.Telephone;
        return __awaiter(this, void 0, void 0, function () {
            var status, status1, b;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.addOwnerButton.isEnabled()];
                    case 1:
                        status = _b.sent();
                        expect(status).to.equal(false);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Add Button is disabled :-( ")];
                    case 2:
                        _b.sent();
                        return [4, this.firstname.sendKeys(FirstName)];
                    case 3:
                        _b.sent();
                        expect(FirstName).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Firstname is greater than 2 characters :- " + FirstName)];
                    case 4:
                        _b.sent();
                        return [4, this.lastname.sendKeys(LastName)];
                    case 5:
                        _b.sent();
                        expect(LastName).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Lastname is greater than 2 characters :- " + LastName)];
                    case 6:
                        _b.sent();
                        return [4, this.address.sendKeys(Address)];
                    case 7:
                        _b.sent();
                        expect(Address).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Address is greater than 2 characters :- " + Address)];
                    case 8:
                        _b.sent();
                        return [4, this.city.sendKeys(City)];
                    case 9:
                        _b.sent();
                        expect(City).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("City is greater than 2 characters :- " + City)];
                    case 10:
                        _b.sent();
                        return [4, this.telephone.sendKeys(Telephone)];
                    case 11:
                        _b.sent();
                        expect(Telephone).to.have.lengthOf(10);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Telephone Number is of 10 digits :- " + Telephone)];
                    case 12:
                        _b.sent();
                        return [4, this.addOwnerButton.isEnabled()];
                    case 13:
                        status1 = _b.sent();
                        expect(status1).to.equal(true);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Add Button is enabled now :-) ")];
                    case 14:
                        _b.sent();
                        return [4, this.addOwnerButton.click()];
                    case 15:
                        _b.sent();
                        return [4, this.addOwnerButton.getAttribute('innerText')];
                    case 16:
                        b = _b.sent();
                        console.log("Save New Owner :- " + b);
                        log4jsconfig_1.log4jsconfig.Log().debug("Save New Owner button verification :- " + b);
                        return [2];
                }
            });
        });
    };
    OwnersPageObject.prototype.clickAllOwnersMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.allOwner.click()];
            });
        });
    };
    OwnersPageObject.prototype.clickOwnerName = function () {
        this.ownerName.click();
    };
    OwnersPageObject.prototype.waitBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.ownerName), 10000)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OwnersPageObject.prototype.clickAddOwnerFromOwnersPage = function () {
        return this.addOwnerFromOwnersPage.click();
    };
    OwnersPageObject.prototype.clickOwnersBackButton = function () {
        return this.ownersBackButton.click();
    };
    return OwnersPageObject;
}());
exports.OwnersPageObject = OwnersPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXJzUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3Qvb3duZXJzUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNFO0FBQ3RFLHVEQUFzRDtBQUM5QyxJQUFBLCtCQUFNLENBQXFCO0FBRW5DLElBQUksWUFBWSxHQUFHLCtCQUFrQixDQUFDO0FBRXRDO0lBQUE7UUFFWSxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwQyxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckQsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDakUsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDeEUsMkJBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0QscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxl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