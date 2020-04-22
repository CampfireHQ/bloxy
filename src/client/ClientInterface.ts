import { RESTControllerConstructor } from "../controllers/rest/RESTInterfaces";


export interface ClientCredentialsOptions {
    cookie?: string;
    username?: string;
    password?: string;
    fcToken?: string;
}


export interface ClientConstructor {
    credentials?: ClientCredentialsOptions;
    rest?: RESTControllerConstructor;
}

export const baseClientConstructor = {};
