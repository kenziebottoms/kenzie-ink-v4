"use strict";

angular.module("io").config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl",
            params: {
                activeTab: "home"            
            }
        })
        .state("blog", {
            url: "/blog",
            templateUrl: "assets/partials/blog.html",
            controller: "BlogCtrl",
            params: {
                activeTab: "blog"            
            }
        })
        .state("resume", {
            url: "/resume",
            templateUrl: "assets/partials/resume.html",
            controller: "ResumeCtrl",
            params: {
                activeTab: "resume"            
            }
        })
        .state("links", {
            url: "/links",
            templateUrl: "assets/partials/links.html",
            controller: "LinksCtrl",
            params: {
                activeTab: "links"            
            }
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "assets/partials/contact.html",
            controller: "ContactCtrl",
            params: {
                activeTab: "contact"            
            }
        })
        .state("art", {
            url: "/blog/art",
            templateUrl: "assets/partials/art.html",
            controller: "ArtCtrl",
            params: {
                activeTab: "art"            
            }
        })
        .state("code", {
            url: "/blog/code",
            templateUrl: "assets/partials/code.html",
            controller: "CodeCtrl",
            params: {
                activeTab: "code"            
            }
        })
        .state("codePost", {
            url: "/code/:id",
            templateUrl: "assets/partials/code-post.html",
            controller: "CodePostCtrl",
            params: {
                activeTab: "code"            
            }
        })
        .state("artPost", {
            url: "/art/:id",
            templateUrl: "assets/partials/art-post.html",
            controller: "ArtPostCtrl",
            params: {
                activeTab: "art"            
            }
        });
});