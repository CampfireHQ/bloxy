import got from "got";
import Request from "./Request";
import { CookieJar } from "tough-cookie";

export declare type RESTControllerConstructor = {
    requester: Function;
    /**
     * If specified, the user agent that will be used for the requests
     */
    userAgent: string | undefined;
    /**
     * If specified, the url which the request will be proxied through
     */
    proxy?: string | undefined;
    /**
     * The current XCSRF token
     */
    xcsrf?: string | undefined;
    /**
     * The time in ms when the xcsrf was last set
     */
    xcsrfSet?: number | undefined;
};

export declare type CreateCookieOptions = {
    key: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
};

export declare type RequestConstructor = {
    jar: CookieJar;
    headers: { [key: string]: string };
    json: boolean;
    qs?: { [key: string]: unknown };
    checks: {
        xcsrf: boolean;
    };
    xcsrf?: string;
};

export declare type ResponseConstructor = {
    request: Request;
    data: { [key: string]: unknown };
    allowedStatusCodes: number[];
    disallowedStatusCodes: number[];
    allowedStatuses: string[];
    disallowedStatuses: string[];
    onlyJSON: boolean;
    checks: {
        xcsrf: boolean;
        status: boolean;
        statusCode: boolean;
        body: boolean;
        captcha: boolean;
    };
};

export const baseRequestConstructor = {
    checks: {
        xcsrf: true,
        status: true,
        statusCode: true,
        body: true,
        captcha: true
    }
};

export const baseCreateCookieOptions = {
    domain: ".roblox.com",
    hostOnly: false,
    httpOnly: false
};

export const baseRESTControllerConstructor = {
    requester: got,
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    proxy: undefined,
    xcsrf: undefined,
    xcsrfSet: undefined
};
