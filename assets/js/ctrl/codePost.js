"use strict";

angular.module("io").controller("CodePostCtrl", function($scope, $stateParams, RestFactory) {
    RestFactory.getCodePost($stateParams.id)
        .then(post => {
            $scope.post = post;
            $scope.post.body = $scope.post.body.replace(/<a /g,"<a target='blank' ");
        });
});