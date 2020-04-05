"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("fp-ts/lib/function");
var http_1 = require("./http");
var TaskEither_1 = require("fp-ts/lib/TaskEither");
exports.createPostIO = function_1.curry(function (database, event) {
    return TaskEither_1.tryCatch(function () { return database.createPost(event.body); }, function (reason) { return new http_1.ApplicationError('Error storing item', [reason], http_1.StatusCodes.SERVER_ERROR); });
});
exports.listPostsIO = function_1.curry(function (database, event) {
    return TaskEither_1.tryCatch(function () { return database.listPosts(); }, function (reason) { return new http_1.ApplicationError('Error retrieving list of items', [reason], http_1.StatusCodes.SERVER_ERROR); });
});
//# sourceMappingURL=io.js.map