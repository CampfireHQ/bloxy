import Client from "../../../client";
import Request from "../Request";


export declare type ResponseConstructorOptions = {
    client: Client;
    request: Request;
    data: { [key: string]: unknown };
    options: { [key: string]: unknown };
};

export declare type ResponseOptions = {
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
