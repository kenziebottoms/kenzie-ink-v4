"use strict";

angular.module("io").controller("ArtPostCtrl", function($scope, $stateParams, RestFactory) {
    RestFactory.getArtPost($stateParams.id)
        .then(post => {
            $scope.post = post;
        });
});