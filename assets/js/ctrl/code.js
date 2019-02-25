'use strict';

angular.module('io').controller('CodeCtrl', function($scope, RestFactory) {
  RestFactory.getCode().then(posts => {
    $scope.blog = posts;
  });
});
