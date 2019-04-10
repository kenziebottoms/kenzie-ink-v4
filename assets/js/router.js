'use strict';

angular.module('io').config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'assets/partials/home.html',
      controller: 'HomeCtrl',
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'assets/partials/projects.html',
      controller: 'ProjectsCtrl',
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'assets/partials/resume.html',
    })
    .state('achievements', {
      url: '/achievements',
      templateUrl: 'assets/partials/achievements.html',
      controller: 'AchievementCtrl',
    })
    .state('contact', {
      url: '/contact',
      redirectTo: 'links',
    })
    .state('links', {
      url: '/links',
      templateUrl: 'assets/partials/links.html',
      controller: 'LinksCtrl',
    })
    .state('art', {
      url: '/projects/art',
      templateUrl: 'assets/partials/art.html',
      controller: 'ArtCtrl',
    })
    .state('code', {
      url: '/projects/code',
      templateUrl: 'assets/partials/code.html',
      controller: 'CodeCtrl',
    })
    .state('codePost', {
      url: '/code/:id',
      templateUrl: 'assets/partials/code-post.html',
      controller: 'CodePostCtrl',
    })
    .state('artPost', {
      url: '/art/:id',
      templateUrl: 'assets/partials/art-post.html',
      controller: 'ArtPostCtrl',
    });
  $urlRouterProvider.otherwise('/');
});
