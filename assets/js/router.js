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
    .state('skills', {
      url: '/skills',
      templateUrl: 'assets/partials/skills.html',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'assets/partials/contact.html',
      controller: 'ContactCtrl',
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
