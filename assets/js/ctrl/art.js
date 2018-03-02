"use strict";

const angular = require("angular");

angular.module("io").controller("ArtCtrl", function($scope, RestFactory) {
    RestFactory.getArt()
        .then(posts => {
            $scope.blog = posts.slice(0,12);
        });
});