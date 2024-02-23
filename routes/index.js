var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send({ status: "ok", data: "hello" }); //
// });

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

// userApi
const userApi = require("./user.api");
router.use("/users", userApi);

// postApi
const postApi = require("./post.api");
router.use("/posts", postApi);

// commentApi
const commentApi = require("./comment.api");
router.use("/comments", commentApi);

// reactionApi
const reactionApi = require("./reaction.api");
router.use("/reactions", reactionApi);

// friendApi
const friendApi = require("./friend.api");
router.use("/friends", friendApi);

//
module.exports = router;

/*
@route POST/auth/login - log in with email and password

@route POST/users - register new account
@route GET/users/page=1&limit=10 - get users with pagination
@route GET/users/me - get current user info
@route GET/users/:id - get user profile
@route PUT/users/:id/ - update user profile

@route POST/posts - create a new post
@route GET/posts/user/userID?page=1&limit=10 -get all posts and user can see with pagination
@route GET/posts/:id - get detail of a post
@route PUT/posts/:id - update a post************
@route DELETE/posts/:id - delete a post************
After User decides to delete a Post/Comment, a window will pop up asking for confirmation.

@route GET/posts/:id - get a single post
@route GET/posts/:id/comments - get comment of a post

@route POST/comments - create a new comment
@route PUT/comments - update a comment
@route DELETE/comments/:id - delete a comment***************
After User decides to delete a Post/Comment, a window will pop up asking for confirmation.

@route POST/reactions - reaction a post and comment

@route POST/friends/request - send a friend request
@route GET/friends/requests/incoming - get list of received pending requests
@route GET/friends/requests/outgoing - get list of sent pending requests*************
@route GET/friends - get list of friends
@route PUT/friends/requests/:userId - accept/reject a received pending request
@route DELETE/friends/:userId - remove friend
@route DELETE/friends/request/:userId - cancel a friend sent request**********
*/
