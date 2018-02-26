"use strict";

const angular = require("angular");

angular.module("io").config($routeProvider => {
    $routeProvider
        .when("/blog", {
            templateUrl: "assets/partials/blog.html",
            controller: "BlogCtrl"
        })
        .when("/post/:id", {
            templateUrl: "assets/partials/post.html",
            controller: "PostCtrl"
        });
});