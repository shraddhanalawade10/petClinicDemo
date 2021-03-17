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
var expCondition = protractor_1.ExpectedConditions;
var GlobalPageObject = (function () {
    function GlobalPageObject() {
        this.pageTitle = protractor_1.element(protractor_1.by.css(".container-fluid .xd-container h2"));
        this.responseList = protractor_1.element(protractor_1.by.css(".container-fluid[_ngcontent-tad-c107]"));
        this.ownersListTbl = protractor_1.element(protractor_1.by.css('table.table-striped tbody'));
    }
    GlobalPageObject.prototype.getRefresh = function () {
        protractor_1.browser.refresh();
    };
    GlobalPageObject.prototype.waitTillVisible = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.visibilityOf(this.responseList), 10000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    GlobalPageObject.prototype.getPageTitleText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.pageTitle.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    GlobalPageObject.prototype.displayPageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var displayPageTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.pageTitle.isDisplayed()];
                    case 1:
                        displayPageTitle = _a.sent();
                        return [2, displayPageTitle];
                }
            });
        });
    };
    GlobalPageObject.prototype.getResponseListText = function () {
        return this.responseList.getText();
    };
    GlobalPageObject.prototype.getNewOwnersEntryDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newOwnersEntry, newOwnersEntryDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.visibilityOf(this.ownersListTbl), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        newOwnersEntry = this.ownersListTbl.all(protractor_1.by.tagName("tr")).last();
                        protractor_1.browser.executeScript('window.scrollBy(0,2500)');
                        return [4, newOwnersEntry.getText()];
                    case 2:
                        newOwnersEntryDetails = _a.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("NewOwnersEntryDetails: " + newOwnersEntryDetails);
                        return [2, newOwnersEntryDetails];
                }
            });
        });
    };
    GlobalPageObject.prototype.getEntryCount = function () {
        var count = this.responseList.all(protractor_1.by.tagName("tr")).count();
        log4jsconfig_1.log4jsconfig.Log().debug("RowCount: " + count);
        return count;
    };
    return GlobalPageObject;
}());
exports.GlobalPageObject = GlobalPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvZ2xvYmFsUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlHO0FBQ3pHLHVEQUFzRDtBQUV0RCxJQUFJLFlBQVksR0FBRywrQkFBa0IsQ0FBQztBQUV0QztJQUFBO1FBRVksY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQXNDekUsQ0FBQztJQXBDRyxxQ0FBVSxHQUFWO1FBQ0ksb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUssMENBQWUsR0FBckI7Ozs7NEJBQ0ksV0FBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsRUFBQTs7d0JBQWxHLFNBQWtHLENBQUM7Ozs7O0tBQ3RHO0lBRUssMkNBQWdCLEdBQXRCOzs7OzRCQUNXLFdBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQTs0QkFBckMsV0FBTyxTQUE4QixFQUFDOzs7O0tBQ3pDO0lBRUssMkNBQWdCLEdBQXRCOzs7Ozs0QkFDMkIsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBckQsZ0JBQWdCLEdBQUcsU0FBa0M7d0JBQ3pELFdBQU8sZ0JBQWdCLEVBQUM7Ozs7S0FDM0I7SUFFRCw4Q0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVLLG1EQUF3QixHQUE5Qjs7Ozs7NEJBQ0ksV0FBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsRUFBQTs7d0JBQW5HLFNBQW1HLENBQUM7d0JBQ2hHLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3JFLG9CQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ3JCLFdBQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBdEQscUJBQXFCLEdBQUcsU0FBOEI7d0JBQzFELDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLHFCQUFxQixDQUFDLENBQUM7d0JBQzVFLFdBQU8scUJBQXFCLEVBQUM7Ozs7S0FDaEM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVELDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLDRDQUFnQiJ9