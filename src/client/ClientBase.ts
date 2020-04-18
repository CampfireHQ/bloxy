import EventEmitter from "events";
import RESTController from "../controllers/rest";
import { clientConstructorOptions } from "./ClientInterface";
import lodash from "lodash";

const defaultConstructorOptions = {};

export default class ClientBase extends EventEmitter {
    public options: clientConstructorOptions;
    public rest: RESTController;

    constructor(options: clientConstructorOptions = defaultConstructorOptions) {
        super();

        this.options = options;
        this.rest = new RESTController(this);
    }

    updateOptions = (options: clientConstructorOptions) => {
        this.options = lodash.merge(defaultConstructorOptions, options);
    };
}
