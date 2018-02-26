"use strict";

const angular = require("angular");

angular.module("io").controller("HomeCtrl", function($scope, RestFactory) {
    RestFactory.getBlog()
        .then(posts => {
            $scope.blog = posts.slice(0,10);
        });
});