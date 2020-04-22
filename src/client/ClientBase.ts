import EventEmitter from "events";
import RESTController from "../controllers/rest";
import { ClientConstructor, baseClientConstructor } from "./ClientInterface";

export default class ClientBase extends EventEmitter {
    public options: ClientConstructor;
    public rest: RESTController;

    constructor (options: ClientConstructor = baseClientConstructor) {
        super();

        this.options = options;
        this.rest = new RESTController(this);

        this.init();
    }

    updateOptions = (options: ClientConstructor): void => {
        this.options = {
            ...baseClientConstructor,
            ...options
        };
    };

    init () {
        if (this.options.rest) this.rest.setOptions(this.options.rest);
    }
}
