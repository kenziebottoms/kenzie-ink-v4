"use strict";

angular.module("io").config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl"
        })
        .state("blog", {
            url: "/blog",
            templateUrl: "assets/partials/blog.html",
            controller: "BlogCtrl"
        })
        .state("resume", {
            url: "/resume",
            templateUrl: "assets/partials/resume.html",
            controller: "ResumeCtrl"
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "assets/partials/contact.html",
            controller: "ContactCtrl"
        })
        .state("art", {
            url: "/blog/art",
            templateUrl: "assets/partials/art.html",
            controller: "ArtCtrl"
        })
        .state("code", {
            url: "/blog/code",
            templateUrl: "assets/partials/code.html",
            controller: "CodeCtrl"
        })
        .state("codePost", {
            url: "/code/:id",
            templateUrl: "assets/partials/code-post.html",
            controller: "CodePostCtrl"
        })
        .state("artPost", {
            url: "/art/:id",
            templateUrl: "assets/partials/art-post.html",
            controller: "ArtPostCtrl"
        });
});