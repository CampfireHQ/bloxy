import Client from "../../../client";
import Request from "../Request";
import lodash from "lodash";
import { ResponseConstructorOptions, ResponseOptions } from "./ResponseInterface";


export default class Response {
    public client: Client;
    public request: Request;
    public data: { [key: string]: unknown };
    public options: ResponseOptions;

    constructor (options: ResponseConstructorOptions) {
        this.client = options.client;
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
        }, options.options || {});
    }
}
