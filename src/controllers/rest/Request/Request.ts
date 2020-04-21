import RESTController from "../RESTController";
import { RequestOptions, defaultRequestOptions } from "./RequestInterface";
import Client from "../../../client";

export default class Request {
    public controller: RESTController;
    public client: Client;
    public options: RequestOptions | undefined;

    constructor (restController: RESTController) {
        this.controller = restController;
        this.client = this.controller.client;
        this.options = undefined;
    }

    setOptions (options: RequestOptions): void {
        this.options = {
            ...defaultRequestOptions,
            ...options
        };
    }

    send () {
        if (!this.options) {
            throw new Error("Options must be provided when sending a request");
        }

        const requester = this.controller.requester;
        this.options.xcsrf = this.controller.getXCSRFToken();
    }
}
