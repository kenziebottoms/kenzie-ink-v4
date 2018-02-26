"use strict";

const angular = require("angular");

angular.module("io").controller("PostCtrl", function($scope, RestFactory, $routeParams) {
    RestFactory.getPost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});