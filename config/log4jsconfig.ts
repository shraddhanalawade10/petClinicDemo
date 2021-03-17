
var log4js = require('log4js');
log4js.configure('./config/log4js.json');
exports.file = log4js.getLogger("default"); //default - prints in both
