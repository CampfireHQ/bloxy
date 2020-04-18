import ClientBase from "./ClientBase";
import { clientConstructorOptions } from "./ClientInterface";
export default class Client extends ClientBase {
    options: clientConstructorOptions;
    constructor(options?: clientConstructorOptions);
}
