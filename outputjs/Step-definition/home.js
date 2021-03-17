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
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var homeObj = new homePageObject_1.HomePageObject();
var globalObj = new globalPageObject_1.GlobalPageObject();
cucumber_1.Given('User navigates to Petclinic url', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homeObj.openBrowser(testData_1.default.testData.baseURLData.baseURL);
            protractor_1.browser.sleep(5000);
            return [2];
        });
    });
});
cucumber_1.Then('User sees Welcome to Petclinic message on homepage', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = expect(true).to).equal;
                    return [4, homeObj.displayWelcomeMsg()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('Verify the welcome message of PetClinic application', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = expect("SpringPetclinicAngular").to).equal;
                    return [4, homeObj.getPageTitle()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is on Petclinic home page', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = expect("Welcome").to).equal;
                    return [4, globalObj.getPageTitleText()];
                case 1: return [4, _b.apply(_a, [_c.sent()])];
                case 2:
                    _c.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User sees five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    _b = (_a = expect(testData_1.default.testData.homePageMenus.homeTab).to).equal;
                    return [4, homeObj.getHomeMenuText()];
                case 1: return [4, _b.apply(_a, [_l.sent()])];
                case 2:
                    _l.sent();
                    _d = (_c = expect(testData_1.default.testData.homePageMenus.ownersTab).to).equal;
                    return [4, homeObj.getOwnersText()];
                case 3: return [4, _d.apply(_c, [_l.sent()])];
                case 4:
                    _l.sent();
                    _f = (_e = expect(testData_1.default.testData.homePageMenus.VetTab).to).equal;
                    return [4, homeObj.getVeterinariansText()];
                case 5: return [4, _f.apply(_e, [_l.sent()])];
                case 6:
                    _l.sent();
                    _h = (_g = expect(testData_1.default.testData.homePageMenus.petTypesTab).to).equal;
                    return [4, homeObj.getPetTypesText()];
                case 7: return [4, _h.apply(_g, [_l.sent()])];
                case 8:
                    _l.sent();
                    _k = (_j = expect(testData_1.default.testData.homePageMenus.specialitiesTab).to).equal;
                    return [4, homeObj.getSpecialtiesText()];
                case 9: return [4, _k.apply(_j, [_l.sent()])];
                case 10:
                    _l.sent();
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXAtZGVmaW5pdGlvbi9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MsK0RBQThEO0FBQzlELG1FQUFrRTtBQUNsRSx5Q0FBcUM7QUFDckMsa0VBQTRDO0FBRTVDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXJCLElBQUEseURBQWlCLENBQXlCO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFHdkMsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRTs7O1lBQ3JDLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7O0NBRXZCLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvREFBb0QsRUFBRTs7Ozs7O29CQUNqRCxLQUFBLENBQUEsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFBO29CQUFDLFdBQU0sT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7d0JBQTdELFdBQU0sY0FBc0IsU0FBaUMsRUFBQyxFQUFBOztvQkFBOUQsU0FBOEQsQ0FBQzs7Ozs7Q0FDbEUsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHFEQUFxRCxFQUFFOzs7Ozs7b0JBQ2xELEtBQUEsQ0FBQSxLQUFBLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQkFBQyxXQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBQTt3QkFBNUUsV0FBTSxjQUEwQyxTQUE0QixFQUFDLEVBQUE7O29CQUE3RSxTQUE2RSxDQUFDOzs7OztDQUNqRixDQUFDLENBQUM7QUFJSCxnQkFBSyxDQUFDLGdDQUFnQyxFQUFFOzs7Ozs7b0JBQzlCLEtBQUEsQ0FBQSxLQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMsV0FBTSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTt3QkFBbkUsV0FBTSxjQUEyQixTQUFrQyxFQUFDLEVBQUE7O29CQUFwRSxTQUFvRSxDQUFDOzs7OztDQUN4RSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaUdBQWlHLEVBQUU7Ozs7OztvQkFDOUYsS0FBQSxDQUFBLEtBQUEsTUFBTSxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMsV0FBTSxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUE7d0JBQTlGLFdBQU0sY0FBeUQsU0FBK0IsRUFBQyxFQUFBOztvQkFBL0YsU0FBK0YsQ0FBQztvQkFDMUYsS0FBQSxDQUFBLEtBQUEsTUFBTSxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMsV0FBTSxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUE7d0JBQTlGLFdBQU0sY0FBMkQsU0FBNkIsRUFBQyxFQUFBOztvQkFBL0YsU0FBK0YsQ0FBQztvQkFDMUYsS0FBQSxDQUFBLEtBQUEsTUFBTSxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMsV0FBTSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBQTt3QkFBbEcsV0FBTSxjQUF3RCxTQUFvQyxFQUFDLEVBQUE7O29CQUFuRyxTQUFtRyxDQUFDO29CQUM5RixLQUFBLENBQUEsS0FBQSxNQUFNLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQkFBQyxXQUFNLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBQTt3QkFBbEcsV0FBTSxjQUE2RCxTQUErQixFQUFDLEVBQUE7O29CQUFuRyxTQUFtRyxDQUFDO29CQUM5RixLQUFBLENBQUEsS0FBQSxNQUFNLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQkFBQyxXQUFNLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFBO3dCQUF6RyxXQUFNLGNBQWlFLFNBQWtDLEVBQUMsRUFBQTs7b0JBQTFHLFNBQTBHLENBQUM7Ozs7O0NBQzlHLENBQUMsQ0FBQyJ9