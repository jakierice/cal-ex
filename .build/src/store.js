"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DB = /** @class */ (function () {
    function DB() {
        var _this = this;
        this.createPost = function (post) {
            _this.posts.push(post);
            return Promise.resolve(post);
        };
        this.listPosts = function () { return Promise.resolve(_this.posts); };
        this.posts = [
            { user: 'John', title: 'First post', text: 'John\'s first post' },
            { user: 'John', title: 'Second post', text: 'John\'s second post' },
            { user: 'John', title: 'Third post', text: 'John\'s third post' }
        ];
    }
    DB.inMemory = function () { return new DB(); };
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=store.js.map