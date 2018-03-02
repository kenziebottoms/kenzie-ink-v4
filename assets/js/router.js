"use strict";

const angular = require("angular");

angular.module("io").config($routeProvider => {
    $routeProvider
        .when("/blog", {
            templateUrl: "assets/partials/blog.html",
            controller: "BlogCtrl"
        })
        .when("/contact", {
            templateUrl: "assets/partials/contact.html",
            controller: "ContactCtrl"
        })
        .when("/blog/art", {
            templateUrl: "assets/partials/art.html",
            controller: "ArtCtrl"
        })
        .when("/blog/code", {
            templateUrl: "assets/partials/code.html",
            controller: "CodeCtrl"
        })
        .when("/code/:id", {
            templateUrl: "assets/partials/code-post.html",
            controller: "CodePostCtrl"
        })
        .when("/art/:id", {
            templateUrl: "assets/partials/art-post.html",
            controller: "ArtPostCtrl"
        });
});