"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskEither_1 = require("fp-ts/lib/TaskEither");
var http_1 = require("./http");
var validation_1 = require("./validation");
var io_1 = require("./io");
exports.createPost = function (event, database) {
    return TaskEither_1.taskEither.of(event)
        .chain(validation_1.validateCreatePostEvent)
        .chain(io_1.createPostIO(database))
        .fold(http_1.errorResponse, http_1.successResponse(http_1.StatusCodes.CREATED));
};
exports.listPosts = function (event, database) {
    return TaskEither_1.taskEither.of(event)
        .chain(validation_1.validateListPostsEvent)
        .chain(io_1.listPostsIO(database))
        .fold(http_1.errorResponse, http_1.successResponse(http_1.StatusCodes.OK));
};
//# sourceMappingURL=service.js.map