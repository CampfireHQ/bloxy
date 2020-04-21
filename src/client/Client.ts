import ClientBase from "./ClientBase";
import { ClientConstructorOptions, defaultClientConstructorOptions } from "./ClientInterface";

export default class Client extends ClientBase {
    public options: ClientConstructorOptions;

    constructor (options: ClientConstructorOptions = defaultClientConstructorOptions) {
        super();
        this.options = options;
    }
}
