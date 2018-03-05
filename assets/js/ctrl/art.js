"use strict";

angular.module("io").controller("ArtCtrl", function($scope, RestFactory) {
    RestFactory.getArt()
        .then(posts => {
            $scope.blog = posts;
            console.log($scope.blog);
        });
});