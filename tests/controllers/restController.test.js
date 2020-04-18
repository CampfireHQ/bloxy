const restController = require("../../src/controllers/rest");
const toughCookie = require("tough-cookie");

describe("RESTController.ts", () => {
	const createTest = (...args) => () => new restController.RESTController(...args);

	describe("Create controller instance", function () {
		it("should error when no client is provided", function () {
			expect(createTest()).toThrow("No client")
		});
		it("should error if client parameter is number", function () {
			expect(createTest(1)).toThrow("No client");
		});
		it("should error if client parameter is boolean ", function () {
			expect(createTest(true)).toThrow("No client");
			expect(createTest(false)).toThrow("No client");
		});
		it("should error if client parameter is string", function () {
			expect(createTest("test")).toThrow("No client")
		});
		it("should not error if client parameter is object", function () {
			expect(createTest({})).not.toThrow();
		});
	});
	describe("Check controller properties without options provided", function () {
		const controller = new restController.RESTController({});

		it("should have client defined", function () {
			expect(controller.client).toBeDefined();
		});
		it("should have options defined", function () {
			expect(controller.options).toBeDefined();
		});
		it("should have options of correct type", function () {
			expect(controller.options).toMatchObject({});
		});
		it("should have jar defined", function () {
			expect(controller.jar).toBeInstanceOf(toughCookie.CookieJar);
		});
		it("should have responseHandlers", function () {
			expect(controller.responseHandlers).toBeDefined();
		});
		it("should have requestHandlers", function () {
			expect(controller.requestHandlers).toBeDefined();
		});
		it("should have responseHandlers as type array", function () {
			expect(controller.responseHandlers).toMatchObject([]);
		});
		it("should have requestHandlers as type array", function () {
			expect(controller.requestHandlers).toMatchObject([]);
		});
	});
});
