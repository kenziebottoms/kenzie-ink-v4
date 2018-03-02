"use strict";

const angular = require("angular");

angular.module("io").controller("BlogCtrl", function($scope, RestFactory) {
    RestFactory.getBlog()
        .then(blog => {
            $scope.blog = blog;
        });
});