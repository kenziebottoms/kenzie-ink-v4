"use strict";

angular.module("io").controller("BlogCtrl", function($scope, RestFactory) {
    RestFactory.getBlog()
        .then(blog => {
            $scope.blog = blog;
        });
});