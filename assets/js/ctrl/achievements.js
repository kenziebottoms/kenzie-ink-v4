'use strict';

angular.module('io').controller('AchievementCtrl', function($scope) {
  $scope.achievements = [
    {
      title: 'Bulletproof',
      icon: 'security',
      description: 'Write 100% test coverage for a unit of code.',
    },
    {
      title: 'Good Thing I Found It First',
      icon: 'healing',
      description: 'Find a bug with automated tests.',
    },
    {
      title: '',
      icon: '',
      description: '',
    },
    {
      title: '',
      icon: '',
      description: '',
    },
  ];
});
