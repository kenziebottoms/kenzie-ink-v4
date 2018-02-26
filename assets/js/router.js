"use strict";

const angular = require("angular");

angular.module("io").config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl"
        });
});