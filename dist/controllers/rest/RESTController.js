"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tough_cookie_1 = require("tough-cookie");
const got_1 = tslib_1.__importDefault(require("got"));
const defaultConstructorOptions = {
    requester: got_1.default
};
class RESTController {
    constructor(client, options = defaultConstructorOptions) {
        this.client = client;
        this.options = options;
        this.requester = this.options.requester;
        this.jar = new tough_cookie_1.CookieJar();
        this.responseHandlers = [];
        this.requestHandlers = [];
        this.init();
    }
    init() {
    }
}
exports.default = RESTController;
