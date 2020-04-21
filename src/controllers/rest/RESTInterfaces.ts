import got from "got";
import Client from "../../client";
import Request from "./Request";


export declare type constructorOptions = object & {
    requester: Function;
    /**
     * If specified, the user agent that will be used for the requests
     */
    userAgent: string | undefined;
    /**
     * If specified, the url which the request will be proxied through
     */
    proxy: string | undefined;
    /**
     * The current XCSRF token
     */
    xcsrf: string | undefined;
    /**
     * The time in ms when the xcsrf was last set
     */
    xcsrfSet: number | undefined;
};

export declare type cookieOptions = {
    key: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
};

export const defaultConstructorOptions = {
    requester: got,
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    proxy: undefined,
    xcsrf: undefined,
    xcsrfSet: undefined
};
