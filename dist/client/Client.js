"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ClientBase_1 = tslib_1.__importDefault(require("./ClientBase"));
const ClientInterface_1 = require("./ClientInterface");
class Client extends ClientBase_1.default {
    constructor(options = ClientInterface_1.defaultClientConstructorOptions) {
        super();
        this.options = options;
    }
}
exports.default = Client;
