"use strict";

const angular = require("angular");

angular.module("io").controller("MenuCtrl", function($scope, $route) {
    $scope.$route = $route;
});