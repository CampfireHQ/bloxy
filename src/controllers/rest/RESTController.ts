import Client from "../../client/Client";
import { Cookie, CookieJar } from "tough-cookie";
import { constructorOptions, cookieOptions, defaultConstructorOptions } from "./RESTInterfaces";
import updateXCSRFToken from "./lib/updateXCSRFToken";


class RESTController {
    public client: Client;
    public options: constructorOptions;
    public requester: Function;
    public jar: CookieJar;
    public responseHandlers: Function[];
    public requestHandlers: Function[];


    constructor (client: Client, options: constructorOptions = defaultConstructorOptions) {
        this.client = client;
        this.options = options;
        this.requester = this.options.requester;
        this.jar = new CookieJar();
        this.responseHandlers = [];
        this.requestHandlers = [];

        this.init();
    }

    updateXCSRFToken (token?: string) {
        if (token) {
            this.setXCSRFToken(token);
        }

        return updateXCSRFToken(this);
    }

    setXCSRFToken (token: string): void {
        this.options.xcsrf = token;
        this.options.xcsrfSet = Date.now();
    }

    getXCSRFToken (): string | Promise<string> {
        if (!this.options.xcsrf || (Date.now() - (this.options.xcsrfSet || 0)) >= (5 * 60 * 1000)) {
            // Refresh token
            return this.updateXCSRFToken();
        }

        return this.options.xcsrf;
    }

    createCookie (cookieOptions: cookieOptions): Cookie {
        return new Cookie(cookieOptions);
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

    init (): void {
        console.log("init called");
    }
}

export default RESTController;
