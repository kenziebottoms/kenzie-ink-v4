"use strict";

angular.module("io").controller("CodePostCtrl", function($scope, $stateParams, RestFactory) {
    RestFactory.getCodePost($stateParams.id)
        .then(post => {
            $scope.post = post;
        });
});