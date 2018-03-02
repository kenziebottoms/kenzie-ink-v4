"use strict";

const angular = require("angular");

angular.module("io").controller("CodePostCtrl", function($scope, $routeParams, RestFactory) {
    RestFactory.getCodePost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});