export class log4jsconfig {
    static debug(arg0: string) {
        throw new Error("Method not implemented.");
    }

    static Log(): any {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        let log = log4js.getLogger("default"); //default - prints in both
        return log;
    }

}