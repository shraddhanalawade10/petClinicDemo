"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.SpecialtiesPageObject = void 0;
var protractor_1 = require("protractor");
var expect = require('chai').expect;
var log = require('../config/log4jsconfig').file;
var data_1 = require("../TestData/data");
var SpecialtiesPageObject = /** @class */ (function () {
    function SpecialtiesPageObject() {
        this.hometab = protractor_1.element(protractor_1.by.css("a[href='/petclinic/welcome']"));
        this.hometitle = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.specialistButton = protractor_1.element(protractor_1.by.css("a[href='/petclinic/specialties']"));
        this.specialtiestitle = protractor_1.element(protractor_1.by.css('div .xd-container h2'));
        this.addButton = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', ' Add '));
        this.editButton = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Edit')).first();
        this.homeButton = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Home'));
        this.deleteButton = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Delete')).first();
        this.specaltiesName = protractor_1.element(protractor_1.by.css("#name"));
        this.saveButton = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Save'));
    }
    //private firstSpecialty = element.all(by.css('tbody tr td')).first();
    //private table = element(by.css('.table.table-striped tbody'))
    SpecialtiesPageObject.prototype.navigateToHomepage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hometab.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.titleVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hometitle.getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, log.debug(text)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, expect(text).to.equal("Welcome to Petclinic")];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.navigateToSpecialtiesPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.specialistButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.specialtiestitleVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.specialtiestitle.getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, log.debug(text)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, expect(text).to.equal("Specialties")];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.isAddHomeDeleteEditEnable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, status1, status2, status3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addButton.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        return [4 /*yield*/, this.homeButton.isEnabled()];
                    case 2:
                        status1 = _a.sent();
                        expect(status1).to.equal(true);
                        return [4 /*yield*/, this.editButton.isEnabled()];
                    case 3:
                        status2 = _a.sent();
                        expect(status2).to.equal(true);
                        return [4 /*yield*/, this.deleteButton.isEnabled()];
                    case 4:
                        status3 = _a.sent();
                        expect(status3).to.equal(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.clickOnAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.enterName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.specaltiesName.sendKeys(data_1.default.testData.specialtiesData.Name)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpecialtiesPageObject.prototype.clickSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveButton.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        return [4 /*yield*/, this.saveButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SpecialtiesPageObject;
}());
exports.SpecialtiesPageObject = SpecialtiesPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHRpZXNQYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaW1wbGVtZW50YXRpb24vc3BlY2lhbHRpZXNQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5QztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3RDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNuRCx5Q0FBdUM7QUFFdkM7SUFBQTtRQUNZLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQzFELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzlDLHFCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdkUscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMzRCxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkUsZUFBVSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvRSxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkUsaUJBQVksR0FBRyxvQkFBTyxD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