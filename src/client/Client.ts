import ClientBase from "./ClientBase";
import { clientConstructorOptions, defaultClientConstructorOptions } from "./ClientInterface";

export default class Client extends ClientBase {
    public options: clientConstructorOptions;

    constructor (options: clientConstructorOptions = defaultClientConstructorOptions) {
        super();
        this.options = options;
    }
}
