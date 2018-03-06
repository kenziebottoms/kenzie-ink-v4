"use strict";

angular.module("io").controller("ProjectsCtrl", function($scope, RestFactory) {
    RestFactory.getBlog()
        .then(blog => {
            $scope.blog = blog;
        });
});