import Client from "../../client/Client";
import { CookieJar } from "tough-cookie";
declare type constructorOptions = object & {
    requester: Function;
};
declare class RESTController {
    client: Client;
    options: constructorOptions;
    requester: Function;
    jar: CookieJar;
    responseHandlers: Function[];
    requestHandlers: Function[];
    constructor(client: Client, options?: constructorOptions);
    init(): void;
}
export default RESTController;
