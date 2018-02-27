"use strict";

const angular = require("angular");

angular.module("io").controller("CodeCtrl", function($scope, RestFactory) {
    RestFactory.getCode()
        .then(posts => {
            $scope.art = posts.slice(0,12);
        });
});