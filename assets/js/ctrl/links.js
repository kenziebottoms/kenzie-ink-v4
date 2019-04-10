'use strict';

angular.module('io').controller('LinksCtrl', function($scope) {
  $scope.links = [
    { name: 'Email', href: 'kenziebottoms@gmail.com', image: 'email.svg' },
    {
      name: 'GitHub',
      href: 'https://github.com/kenziebottoms',
      image: 'github.svg',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kenziebottoms',
      image: 'insta.svg',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kenziebottoms',
      image: 'twitter.svg',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kenzie-bottoms',
      image: 'linkedin.svg',
    },
    {
      name: 'CodePen',
      href: 'https://codepen.io/kenziebottoms/',
      image: 'codepen.svg',
    },
    {
      name: 'Visual Studio Marketplace',
      href: 'https://marketplace.visualstudio.com/publishers/kenziebottoms',
      image: 'vscode.png',
    },
    {
      name: 'ArtStation',
      href: 'https://kenziebottoms.artstation.com/',
      image: 'artstation.svg',
    },
    {
      name: 'Society6',
      href: 'https://society6.com/claquesous',
      image: 'society6.png',
    },
    {
      name: 'Artists&Clients',
      href: 'https://artistsnclients.com/people/kenziebottoms',
      image: 'artistsnclients.png',
    },
  ];
});
