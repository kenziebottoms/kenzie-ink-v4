'use strict';

angular
  .module('io')
  .controller('ArtPostCtrl', function($scope, $stateParams, RestFactory) {
    RestFactory.getArtPost($stateParams.id).then(post => {
      $scope.post = post;
      $scope.post.body = $scope.post.body.replace(/<a /g, "<a target='blank' ");
      RestFactory.getNextArtPost(post.date)
        .then(data => {
          $scope.next = data[0]._id;
        })
        .catch(err => console.log(err));
      RestFactory.getPrevArtPost(post.date)
        .then(data => {
          $scope.prev = data[0]._id;
        })
        .catch(err => console.log(err));
    });
  });
