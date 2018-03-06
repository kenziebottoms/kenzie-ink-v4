"use strict";

angular.module("io").controller("ContactCtrl", function($scope) {
    $scope.contact = {
        "email": "kenziebottoms@gmail.com",
        "github": "https://github.com/kenziebottoms",
        "instagram": "https://www.instagram.com/kenziebottoms",
        "twitter": "https://twitter.com/kenziebottoms",
        "linkedin": "https://www.linkedin.com/in/mckenzie-bottoms",
        "tumblr": "http://chokingontheirhalos.tumblr.com/tagged/portfolio",
        "codepen": "https://codepen.io/kenziebottoms/",
        "artistsnclients": "https://artistsnclients.com/people/kenziebottoms",
        "artstation": "https://kenziebottoms.artstation.com/"
    };

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