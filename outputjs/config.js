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
exports.config = {
    directConnect: true,
    framework: 'mocha',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: { 'args': ['disable-infobars'] },
        acceptSslCerts: true
        /*browserName: 'firefox',
        'moz:firefoxOptions': {
            // args: ["--safe-mode"],
            args: ["--headless"],*/
    },
    suites: {
        mochaTest: '../outputjs/pageObjects/*.js'
    },
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.manage().window().maximize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFFYixhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsT0FBTztJQUVsQix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLFlBQVksRUFDWjtRQUNJLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7UUFDL0MsY0FBYyxFQUFFLElBQUk7UUFDcEI7OzttQ0FHMkI7S0FDOUI7SUFFRCxNQUFNLEVBQUU7UUFDSixTQUFTLEVBQUUsOEJBQThCO0tBQzVDO0lBRUQsU0FBUyxFQUFFOzs7OzRCQUNQLHFCQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBakQsU0FBaUQsQ0FBQzs7Ozs7S0FDckQ7SUFFRCxTQUFTLEVBQUU7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0NBQ0osQ0FBQSJ9