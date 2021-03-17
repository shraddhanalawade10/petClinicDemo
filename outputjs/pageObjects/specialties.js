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
var protractor_1 = require("protractor");
var specialtiesPageObject_1 = require("../implementation/specialtiesPageObject");
var mocha_1 = require("mocha");
var data_1 = require("../TestData/data");
var log = require('../config/log4jsconfig').file;
var specialtiesObj = new specialtiesPageObject_1.SpecialtiesPageObject();
mocha_1.describe('Testing Specialties Menu', function () {
    var _this = this;
    this.beforeAll('Navigate to the Petclinic Home page', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get(data_1.default.appUrl)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Verification of Home page title ", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await specialtiesObj.navigateToHomepage();
                return [4 /*yield*/, specialtiesObj.titleVerification()];
                case 1:
                    // await specialtiesObj.navigateToHomepage();
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Click on Specialist menu and verification of Specialist page title", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, specialtiesObj.navigateToSpecialtiesPage()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, specialtiesObj.specialtiestitleVerification()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Verification of all buttons", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, specialtiesObj.isAddHomeDeleteEditEnable()];
                case 1:
                    _a.sent();
                    log.debug("All the buttons are enabled");
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Click on Add button", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, specialtiesObj.clickOnAdd()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Enter Specialist name", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, specialtiesObj.enterName()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    mocha_1.it("Verify is save button enabled or not", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, specialtiesObj.clickSave()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        var png;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    png = _a.sent();
                    return [4 /*yield*/, allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9zcGVjaWFsdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUNyQyxpRkFBZ0Y7QUFDaEYsK0JBQXFDO0FBRXJDLHlDQUFvQztBQUVwQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO0FBRWpELGdCQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFBQSxpQkFzQ3BDO0lBckNHLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLEVBQUU7Ozt3QkFDbEQscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztvQkFBOUIsU0FBOEIsQ0FBQzs7OztTQUNsQyxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMsa0NBQWtDLEVBQUU7Ozs7Z0JBQ25DLDZDQUE2QztnQkFDN0MscUJBQU0sY0FBYyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O29CQUR4Qyw2Q0FBNkM7b0JBQzdDLFNBQXdDLENBQUM7Ozs7U0FFNUMsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLG9FQUFvRSxFQUFFOzs7d0JBQ3JFLHFCQUFNLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxFQUFBOztvQkFBaEQsU0FBZ0QsQ0FBQztvQkFDakQscUJBQU0sY0FBYyxDQUFDLDRCQUE0QixFQUFFLEVBQUE7O29CQUFuRCxTQUFtRCxDQUFDOzs7O1NBRXZELENBQUMsQ0FBQztJQUVILFVBQUUsQ0FBQyw2QkFBNkIsRUFBRTs7O3dCQUM5QixxQkFBTSxjQUFjLENBQUMseUJBQXlCLEVBQUUsRUFBQTs7b0JBQWhELFNBQWdELENBQUM7b0JBQ2pELEdBQUcsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7OztTQUM1QyxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMscUJBQXFCLEVBQUU7Ozt3QkFDdEIscUJBQU0sY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQzs7OztTQUNyQyxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMsdUJBQXVCLEVBQUU7Ozt3QkFDeEIscUJBQU0sY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFBOztvQkFBaEMsU0FBZ0MsQ0FBQzs7OztTQUNwQyxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMsc0NBQXNDLEVBQUU7Ozt3QkFDdkMscUJBQU0sY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFBOztvQkFBaEMsU0FBZ0MsQ0FBQzs7OztTQUNwQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7Ozs7d0JBQ00scUJBQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQTs7b0JBQXBDLEdBQUcsR0FBRyxTQUE4QjtvQkFDMUMscUJBQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUE7O29CQUFuRixTQUFtRixDQUFDOzs7O1NBQ3ZGLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=