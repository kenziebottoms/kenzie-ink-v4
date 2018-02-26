"use strict";

const angular = require("angular");

angular.module("io").controller("HomeCtrl", function($scope, RestFactory) {
    RestFactory.getBlog()
        .then(posts => {
            console.log(posts);
        });
});