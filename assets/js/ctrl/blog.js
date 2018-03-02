"use strict";

const angular = require("angular");

angular.module("io").controller("BlogCtrl", function($scope, $route, RestFactory) {
    $scope.$route = $route;
    RestFactory.getBlog()
        .then(blog => {
            $scope.blog = blog;
        });
});