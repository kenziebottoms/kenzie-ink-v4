"use strict";

const angular = require("angular");

angular.module("io").controller("ArtCtrl", function($scope, RestFactory) {
    RestFactory.getArt()
        .then(posts => {
            $scope.art = posts.slice(0,12);
        });
});