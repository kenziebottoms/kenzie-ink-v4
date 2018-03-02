"use strict";

const angular = require("angular");

angular.module("io").controller("ArtPostCtrl", function($scope, $routeParams, RestFactory) {
    RestFactory.getArtPost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});