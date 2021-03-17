"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4jsconfig = (function () {
    function log4jsconfig() {
    }
    log4jsconfig.debug = function (arg0) {
        throw new Error("Method not implemented.");
    };
    log4jsconfig.Log = function () {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        var log = log4js.getLogger("default");
        return log;
    };
    return log4jsconfig;
}());
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2xvZzRqc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFZQSxDQUFDO0lBWFUsa0JBQUssR0FBWixVQUFhLElBQVk7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxnQkFBRyxHQUFWO1FBQ0ksSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxvQ0FBWSJ9