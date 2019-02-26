'use strict';

angular.module('io').controller('MenuCtrl', function($scope, $state) {
  $scope.items = [
    {
      name: 'projects',
      icon: 'extension',
      href: 'projects',
      sec: false,
    },
    {
      name: 'art',
      icon: 'color_lens',
      href: 'projects/art',
      sec: true,
    },
    {
      name: 'code',
      icon: 'code',
      href: 'projects/code',
      sec: true,
    },
    {
      name: 'resume',
      icon: 'assignment_ind',
      href: 'resume',
      sec: false,
    },
    {
      name: 'badges',
      icon: 'stars',
      href: 'achievements',
      sec: false,
    },
    {
      name: 'contact',
      icon: 'info_outline',
      href: 'contact',
      sec: false,
    },
  ];
  $scope.state = $state;
});
