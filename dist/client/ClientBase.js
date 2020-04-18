"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const rest_1 = tslib_1.__importDefault(require("../controllers/rest"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const defaultConstructorOptions = {};
class ClientBase extends events_1.default {
    constructor(options = defaultConstructorOptions) {
        super();
        this.updateOptions = (options) => {
            this.options = lodash_1.default.merge(defaultConstructorOptions, options);
        };
        this.options = options;
        this.rest = new rest_1.default(this);
    }
}
exports.default = ClientBase;
