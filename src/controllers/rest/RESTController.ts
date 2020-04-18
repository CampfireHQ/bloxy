import Client from "../../client/Client";
import { CookieJar } from "tough-cookie";
import got from "got";

declare type constructorOptions = object & {
	requester: Function;
};

const defaultConstructorOptions = {
	requester: got
};

class RESTController {

	public client: Client;
	public options: constructorOptions;
	public requester: Function;
	public jar: CookieJar;
	public responseHandlers: Function[];
	public requestHandlers: Function[];


	constructor (client: Client, options: constructorOptions = defaultConstructorOptions) {
		this.client = client;
		this.options = options;
		this.requester = this.options.requester;
		this.jar = new CookieJar();
		this.responseHandlers = [];
		this.requestHandlers = [];

		this.init();
	}

	init () {

	}
}

export default RESTController;
