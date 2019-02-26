'use strict';

angular.module('io').controller('AchievementCtrl', function($scope) {
  $scope.achievements = [
    {
      title: 'Bulletproof',
      icon: 'security',
      description: 'Write 100% test coverage for a unit of code.',
    },
    {
      title: 'Finders Keepers',
      icon: 'healing',
      description: 'Find a bug in production with automated tests.',
    },
    {
      title: '3 Characters Per Minute',
      icon: 'keyboard',
      description: 'Write 20 aliases for Zsh.',
    },
    {
      title: 'Pushover',
      icon: 'assignment_turned_in',
      description: 'Approve 20 pull requests.',
    },
    {
      title: "Teacher's Pet",
      icon: 'assignment_late',
      description: 'Reject 1 pull request.',
    },
    {
      title: 'Mother May I?',
      icon: 'merge_type',
      description: 'Write 50 pull requests.',
    },
    {
      title: 'Buckle Up',
      icon: 'send',
      description: 'Merge 30 branches into master.',
    },
  ];
});
