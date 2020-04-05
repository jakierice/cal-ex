"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./src/store");
var service_1 = require("./src/service");
var db = store_1.DB.inMemory();
exports.listPostsHandler = function (event) {
    return service_1.listPosts(event, db).run();
};
exports.createPostHandler = function (event) {
    return service_1.createPost(event, db).run();
};
//# sourceMappingURL=handler.js.map