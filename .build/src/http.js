"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("fp-ts/lib/function");
var DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};
var StatusCodes = /** @class */ (function () {
    function StatusCodes() {
    }
    StatusCodes.OK = 200;
    StatusCodes.CREATED = 201;
    StatusCodes.BAD_REQUEST = 400;
    StatusCodes.SERVER_ERROR = 500;
    return StatusCodes;
}());
exports.StatusCodes = StatusCodes;
var ApplicationError = /** @class */ (function () {
    function ApplicationError(message, errors, status) {
        this.message = message;
        this.errors = errors;
        this.statusCode = status;
    }
    return ApplicationError;
}());
exports.ApplicationError = ApplicationError;
exports.successResponse = function_1.curry(function (statusCode, result) {
    return ({
        statusCode: statusCode,
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(result)
    });
});
exports.errorResponse = function (error) {
    return ({
        statusCode: error.statusCode,
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({ message: error.message, errors: error.errors })
    });
};
//# sourceMappingURL=http.js.map