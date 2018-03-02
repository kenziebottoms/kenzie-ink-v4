"use strict";

const angular = require("angular");

angular.module("io").controller("ContactCtrl", function($scope, $route) {
    $scope.$route = $route;
    $scope.contact = {
        "email": "kenziebottoms@gmail.com"
    };
});