"use strict";

const angular = require("angular");

angular.module("io").controller("LinksCtrl", function($scope) {
    $scope.social = [
        {
            "name": "Code",
            "links": [
                {
                    "name": "Github",
                    "url": "https://github.com/kenziebottoms"
                },
                {
                    "name": "Twitter",
                    "url": "https://twitter.com/kenziebottoms"
                },
                {
                    "name": "LinkedIn",
                    "url": "https://www.linkedin.com/in/mckenzie-bottoms"
                },
                {
                    "name": "Codepen",
                    "url": "https://codepen.io/kenziebottoms/"
                }
            ]
        },
        {
            "name": "Art",
            "links": [
                {
                    "name": "Instagram",
                    "url": "https://www.instagram.com/kenziebottoms/"
                },
                {
                    "name": "Tumblr",
                    "url": "http://chokingontheirhalos.tumblr.com/tagged/portfolio"
                },
                {
                    "name": "ArtStation",
                    "url": "https://kenziebottoms.artstation.com/"
                },
                {
                    "name": "Commissions",
                    "url": "https://artistsnclients.com/people/kenziebottoms"
                }
            ]
        }
    ];
    $scope.resources = [
        {
            "name": "Fonts",
            "links": [
                {
                    "name": "Adobe Edge Web Fonts",
                    "desc": "free web fonts",
                    "url": "https://edgewebfonts.adobe.com/fonts"
                },
                {
                    "name": "Dafont.com",
                    "desc": "free font downloads",
                    "url": "http://www.dafont.com/"
                },
                {
                    "name": "Google Fonts",
                    "desc": "free web fonts",
                    "url": "https://fonts.google.com/"
                },
                {
                    "name": "Font Squirrel",
                    "desc": "commercially usable free font downloads",
                    "url": "https://www.fontsquirrel.com/"
                },
                {
                    "name": "Fonts2U",
                    "desc": "free font downloads",
                    "url": "http://www.fonts2u.com/index.html"
                },
                {
                    "name": "Lost Type",
                    "desc": "pay-what-you-can font downloads",
                    "url": "http://www.losttype.com/"
                }
            ]
        },
        {
            "name": "Blogs",
            "links": [
                {
                    "name": "CSS Tricks",
                    "url": "https://css-tricks.com/"
                },
                {
                    "name": "DWB",
                    "desc": "David Walsh",
                    "url": "https://davidwalsh.name/"
                }
            ]
        }
    ];
});