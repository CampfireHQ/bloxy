import RESTController from "../RESTController";
import { RequestConstructor, baseRequestConstructor } from "../RESTInterfaces";
import Client from "../../../client";

export default class Request {
    public controller: RESTController;
    public client: Client;
    public options: RequestConstructor | undefined;

    constructor (restController: RESTController) {
        this.controller = restController;
        this.client = this.controller.client;
        this.options = undefined;
    }

    setOptions (options: RequestConstructor): void {
        this.options = {
            ...baseRequestConstructor,
            ...options
        };
    }

    async send (): Promise<object> {
        if (!this.options) {
            throw new Error("Options must be provided when sending a request");
        }

        // const requester = this.controller.requester;
        this.options.xcsrf = await this.controller.getXCSRFToken();

        return {};
    }
}
