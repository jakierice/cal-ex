"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var TaskEither_1 = require("fp-ts/lib/TaskEither");
var bodyNotNull = function (event) {
    if (event.body === null) {
        return TaskEither_1.left2v(new http_1.ApplicationError('Error parsing request body', ['Body cannot be empty'], http_1.StatusCodes.BAD_REQUEST));
    }
    return TaskEither_1.right2v(event);
};
var asUserPostEvent = function (event) {
    try {
        var parsedBody = event.body
            ? JSON.parse(event.body)
            : {};
        return TaskEither_1.right2v(__assign({}, event, { body: parsedBody }));
    }
    catch (error) {
        return TaskEither_1.left2v(new http_1.ApplicationError('Error parsing request body', ['Invalid JSON'], http_1.StatusCodes.BAD_REQUEST));
    }
};
var queryParamsIsNull = function (event) {
    if (event.queryStringParameters !== null) {
        return TaskEither_1.left2v(new http_1.ApplicationError('Error parsing request query params', ['Query params should be empty'], http_1.StatusCodes.BAD_REQUEST));
    }
    return TaskEither_1.right2v(event);
};
var pathParamsIsNull = function (event) {
    if (event.pathParameters !== null) {
        return TaskEither_1.left2v(new http_1.ApplicationError('Error parsing request path params', ['Path params should be empty'], http_1.StatusCodes.BAD_REQUEST));
    }
    return TaskEither_1.right2v(event);
};
exports.validateCreatePostEvent = function (event) {
    return TaskEither_1.taskEither.of(event)
        .chain(pathParamsIsNull)
        .chain(queryParamsIsNull)
        .chain(bodyNotNull)
        .chain(asUserPostEvent);
};
exports.validateListPostsEvent = function (event) {
    return TaskEither_1.taskEither.of(event)
        .chain(pathParamsIsNull)
        .chain(queryParamsIsNull);
};
//# sourceMappingURL=validation.js.map