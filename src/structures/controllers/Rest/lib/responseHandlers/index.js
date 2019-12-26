const handlers = [
	require("./xcsrf"),
	require("./captcha")
];
/**
 * @param {RestController} controller
 */
module.exports = controller => {
	handlers.forEach(handler => {
		controller.addResponseHandler(handler);
	});
};
