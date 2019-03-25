'use strict';

angular.module('io').controller('MenuCtrl', function($scope, $state) {
  $scope.items = [
    {
      name: 'art',
      icon: 'color_lens',
      href: 'projects/art',
    },
    {
      name: 'code',
      icon: 'code',
      href: 'projects/code',
    },
    {
      name: 'resume',
      icon: 'assignment_ind',
      href: 'resume',
    },
    {
      name: 'badges',
      icon: 'stars',
      href: 'achievements',
    },
    {
      name: 'contact',
      icon: 'info_outline',
      href: 'contact',
    },
  ];
  $scope.state = $state;
});
