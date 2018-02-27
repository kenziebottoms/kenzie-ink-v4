"use strict";

const angular = require("angular");

angular.module("io").controller("CodePostCtrl", function($scope, RestFactory, $routeParams) {
    RestFactory.getCodePost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});