"use strict";

const angular = require("angular");

angular.module("io").controller("ArtPostCtrl", function($scope, RestFactory, $routeParams) {
    RestFactory.getArtPost($routeParams.id)
        .then(post => {
            $scope.post = post;
        });
});