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
      description: 'Find a bug by writing automated tests.',
    },
    {
      title: "You're Welcome",
      icon: 'cast',
      description: 'Demo a feature you built for a client.',
    },
    {
      title: 'Jam On',
      icon: 'stars',
      description:
        'Score 20 points in <a href="https://en.wikipedia.org/wiki/Roller_derby#Jams" target="blank">one jam</a>.',
    },
    {
      title: 'Beat The Game',
      icon: 'access_time',
      description: 'Spend more than 50 hours on a single piece of art.',
    },
    {
      title: 'My Stomach Hurts',
      icon: 'error',
      description: 'Write informative, specific error messages.',
    },
    {
      title: 'Autocorrect',
      icon: 'spellcheck',
      description: "Correct a misspelled variable that isn't hurting anyone.",
    },
    {
      title: 'Shrug Emoji',
      icon: 'tag_faces',
      description: 'Create 10 slack emojis.',
    },
    {
      title: '3 Characters Per Minute',
      icon: 'keyboard',
      description:
        'Write 20 aliases for <a href="https://ohmyz.sh/" target="blank">Zsh</a>.',
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
      description: 'Merge 20 branches into master.',
    },
  ];
});
