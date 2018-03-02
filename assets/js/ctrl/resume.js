"use strict";

const angular = require("angular");

angular.module("io").controller("ResumeCtrl", function($scope) {
    $scope.resume = [
        {
            "company": "Hereit.org",
            "position": "freelance developer",
            "date": "June 2013 - May 2015",
            "desc": [
                "HTML audio player",
                "Repair and expansion of existing front-end and admin dashboard features",
                "Implementation of a front-end redesign",
                "Incorporation of e-Commerce"
            ],
            "tech": [
                "HTML/CSS", "PHP", "MySQL", "JavaScript/jQuery", "Stripe e-Commerce"
            ]
        }
    ];
});