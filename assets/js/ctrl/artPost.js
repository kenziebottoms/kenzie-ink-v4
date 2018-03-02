"use strict";

const angular = require("angular");

angular.module("io").controller("ArtPostCtrl", function($scope, $route, RestFactory, $routeParams) {
    $scope.$route = $route;
    RestFactory.getArtPost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});