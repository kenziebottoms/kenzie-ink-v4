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
        },
        {
            "company": "Centre College IT Services",
            "position": "junior developer",
            "date": "Septempber 2014 - January 2015",
            "desc": [
                "build and modify student dashboard features"
            ],
            "tech": [
                "C#"
            ]
        },
        {
            "company": "Acxiom Corporation",
            "position": "Digital Content Specialist intern",
            "date": "July 2015 - December 2015",
            "desc": [
                "build and modify email marketing campaigns"
            ],
            "tech": [
                "HTML/CSS", "Javascript", "Photoshop"
            ]
        },
        {
            "company": "G/O Digital",
            "position": "maintenance specialist, web dev associate",
            "date": "January 2016 - April 2017",
            "desc": [
                "build custom, responsive WordPress themes",
                "maintain and repair WordPress themes and plugins",
                "organize and facilite inter-server website migration"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "jQuery", "PHP", "WordPress", "ExpressionEngine", "Git"
            ]
        },
        {
            "company": "IASIS Healthcare",
            "position": "freelance developer",
            "date": "June 2017 - September 2017",
            "desc": [
                "repair and optimize existing WordPress sites",
                "design and implement custom landing pages"
            ],
            "tech": [
                "HTML/CSS", "jQuery", "PHP", "WordPress"
            ]
        },
        {
            "company": "Vantedge",
            "position": "freelance developer",
            "date": "January 2018 - present",
            "desc": [
                "design and implement custom archive pages",
                "update, optimize, and modify a custom WordPress theme"
            ],
            "tech": [
                "HTML/CSS", "jQuery", "PHP", "WordPress", "Git"
            ]
        },
        {
            "company": "Nashville Software School",
            "position": "student of Full-Time Web Dev Cohort 23",
            "date": "November 2017 - May 2018",
            "desc": [
                "design and implement custom archive pages",
                "update, optimize, and modify a custom WordPress theme"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "Javascript & jQuery", "AngularJS", "Node.js", "Git"
            ]
        }
    ];
    $scope.resume.reverse();
});