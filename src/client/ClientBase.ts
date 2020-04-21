import EventEmitter from "events";
import RESTController from "../controllers/rest";
import { ClientConstructorOptions } from "./ClientInterface";
import lodash from "lodash";

const defaultConstructorOptions = {};

export default class ClientBase extends EventEmitter {
    public options: ClientConstructorOptions;
    public rest: RESTController;

    constructor (options: ClientConstructorOptions = defaultConstructorOptions) {
        super();

        this.options = options;
        this.rest = new RESTController(this);
    }

    updateOptions = (options: ClientConstructorOptions): void => {
        this.options = lodash.merge(defaultConstructorOptions, options);
    };
}
