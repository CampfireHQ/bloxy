/// <reference types="node" />
import EventEmitter from "events";
import RESTController from "../controllers/rest";
import { clientConstructorOptions } from "./ClientInterface";
export default class ClientBase extends EventEmitter {
    options: clientConstructorOptions;
    rest: RESTController;
    constructor(options?: clientConstructorOptions);
    updateOptions: (options: clientConstructorOptions) => void;
}
