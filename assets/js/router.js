"use strict";

const angular = require("angular");

angular.module("io").config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl",
            activeTab: "home"
        })
        .when("/blog", {
            templateUrl: "assets/partials/blog.html",
            controller: "BlogCtrl",
            activeTab: "blog"
        })
        .when("/contact", {
            templateUrl: "assets/partials/contact.html",
            controller: "ContactCtrl",
            activeTab: "contact"
        })
        .when("/blog/art", {
            templateUrl: "assets/partials/art.html",
            controller: "ArtCtrl",
            activeTab: "art"
        })
        .when("/blog/code", {
            templateUrl: "assets/partials/code.html",
            controller: "CodeCtrl",
            activeTab: "code"
        })
        .when("/code/:id", {
            templateUrl: "assets/partials/code-post.html",
            controller: "CodePostCtrl",
            activeTab: "code"
        })
        .when("/art/:id", {
            templateUrl: "assets/partials/art-post.html",
            controller: "ArtPostCtrl",
            activeTab: "art"
        })
        .otherwise("/");
});