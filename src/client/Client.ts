import ClientBase from "./ClientBase";
import { ClientConstructor, baseClientConstructor } from "./ClientInterface";

export default class Client extends ClientBase {
    constructor (options: ClientConstructor = baseClientConstructor) {
        super(options);
    }
}
