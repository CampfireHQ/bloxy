import Client from "../../client/Client";
import { Cookie, CookieJar } from "tough-cookie";
import {
    baseCreateCookieOptions, baseRESTControllerConstructor,
    CreateCookieOptions,
    RequestConstructor,
    ResponseConstructor,
    RESTControllerConstructor
} from "./RESTInterfaces";
import updateXCSRFToken from "./lib/updateXCSRFToken";
import Request from "./Request";
import Response from "./Response";


class RESTController {
    public client: Client;
    public options: RESTControllerConstructor;
    public jar: CookieJar;
    public responseHandlers: Function[];
    public requestHandlers: Function[];


    constructor (client: Client, options: RESTControllerConstructor = baseRESTControllerConstructor) {
        this.client = client;
        this.jar = new CookieJar();
        this.responseHandlers = [];
        this.requestHandlers = [];
        this.options = baseRESTControllerConstructor;

        this.setOptions(options);
        this.init();
    }

    request (options: { request: RequestConstructor; response: ResponseConstructor }): unknown {
        const request = new Request(this);
        const response = new Response(this);

        request.setOptions(options.request);
        response.setOptions(options.response);

        return request.send().then((responseData: object) => response.parse(responseData));
    }

    fetchXCSRFToken (): Promise<string> {
        return updateXCSRFToken(this);
    }

    setXCSRFToken (token: string): void {
        this.options.xcsrf = token;
        this.options.xcsrfSet = Date.now();
    }

    async getXCSRFToken (): Promise<string | undefined> {
        if (!this.options.xcsrf || (Date.now() - (this.options.xcsrfSet || 0)) >= (5 * 60 * 1000)) {
            // Refresh token
            const token = await this.fetchXCSRFToken();
            this.setXCSRFToken(token);
        }

        return this.options.xcsrf;
    }

    createCookie (cookieOptions: CreateCookieOptions): Cookie {
        return new Cookie({
            ...baseCreateCookieOptions,
            ...cookieOptions
        });
    }

    addCookie (cookie: Cookie, domain: string, setCookieOptions?: object): Cookie {
        return this.jar.setCookieSync(cookie, domain || "https://roblox.com", setCookieOptions);
    }

    getCookie (domain: string): Cookie[] {
        return this.jar.getCookiesSync(domain);
    }

    addResponseHandler (handler: Function): void {
        this.requestHandlers.push(handler);
    }

    addRequestHandler (handler: Function): void {
        this.requestHandlers.push(handler);
    }

    setProxy (proxyURL: string): void {
        this.options.proxy = proxyURL;
    }

    getProxy (): string | undefined {
        return this.options.proxy;
    }

    setUserAgent (userAgent: string): void {
        this.options.userAgent = userAgent;
    }

    getUserAgent (): string | undefined {
        return this.options.userAgent;
    }

    setOptions (options: RESTControllerConstructor): RESTControllerConstructor {
        this.options = {
            ...baseRESTControllerConstructor,
            ...options
        };

        return this.options;
    }

    init (): void {
        console.log("init called");
    }
}

export default RESTController;
