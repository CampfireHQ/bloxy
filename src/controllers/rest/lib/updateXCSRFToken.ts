import RESTController from "../RESTController";

export default async function updateXCSRFToken (restController: RESTController): Promise<string> {
    console.log(restController);
    await console.log("hi");
    return "boop";
}
