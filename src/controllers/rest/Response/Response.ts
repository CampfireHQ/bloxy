import Client from "../../../client";
import Request from "../Request";
import lodash from "lodash";
import { ResponseConstructor } from "../RESTInterfaces";
import RESTController from "../RESTController";


export default class Response {
    public controller: RESTController;
    public client: Client;
    public request: Request | undefined;
    public data: { [key: string]: unknown } | undefined;
    public options: ResponseConstructor | undefined;

    constructor (restController: RESTController) {
        this.controller = restController;
        this.client = this.controller.client;
        this.options = undefined;
        this.data = undefined;
    }

    setOptions (options: ResponseConstructor): void {
        this.request = options.request;
        this.data = options.data;
        this.options = lodash.merge({
            allowedStatusCodes: [],
            disallowedStatusCodes: [],
            allowedStatuses: [],
            disallowedStatuses: [],
            onlyJSON: false,
            checks: {
                xcsrf: true,
                status: true,
                statusCode: true,
                body: true,
                captcha: true
            }
        }, options || {});
    }

    parse (data: unknown): object {
        return { data };
    }
}
