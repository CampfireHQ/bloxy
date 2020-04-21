import { CookieJar } from "tough-cookie";


export declare interface RequestOptions {
    jar: CookieJar;
    headers: { [key: string]: string };
    json: boolean;
    qs?: { [key: string]: unknown };
    checks: {
        xcsrf: boolean;
    };
    xcsrf?: string;
}

export const defaultRequestOptions = {
    checks: {
        xcsrf: true
    }
};
