"use strict";

angular.module("io").controller("ResumeCtrl", function ($scope) {
    $scope.resume = [
        {
            "company": "Hereit.org",
            "position": "freelance developer",
            "date": "June 2013 - May 2015",
            "desc": [
                "Custom HTML5 audio player with CSS and jQuery",
                "Repair and expansion of user and admin features with PHP and MySQL",
                "Implementation of a front-end redesign with CSS3",
                "Stripe e-commerce subscriptions and payments with jQuery"
            ],
            "tech": [
                "HTML/CSS", "PHP", "MySQL", "JavaScript/jQuery", "Stripe e-Commerce"
            ]
        },
        {
            "company": "Centre College IT Services",
            "position": "junior developer",
            "date": "Sep 2014 - Jan 2015",
            "desc": [
                "Construction, modification, and enhancement of student dashboard features"
            ],
            "tech": [
                "C#"
            ]
        },
        {
            "company": "Acxiom Corporation",
            "position": "Digital Content Specialist intern",
            "date": "July 2015 - Dec 2015",
            "desc": [
                "Construction, modification, and QA of HTML email marketing templates"
            ],
            "tech": [
                "HTML/CSS", "JavaScript", "Photoshop"
            ]
        },
        {
            "company": "IASIS Healthcare",
            "position": "freelance developer",
            "date": "June 2017 - Sep 2017",
            "desc": [
                "Repair and optimization of existing WordPress sites",
                "Design and implementation of custom landing pages"
            ],
            "tech": [
                "HTML/CSS", "jQuery", "PHP", "WordPress"
            ]
        },
        {
            "company": "Vantedge",
            "position": "freelance developer",
            "date": "Jan 2018 - present",
            "desc": [
                "Design and implementation of custom archive pages",
                "Optimization, modification, and maintenance of a custom WordPress theme"
            ],
            "tech": [
                "HTML/CSS", "jQuery", "PHP", "WordPress", "Git"
            ]
        },
        {
            "company": "G/O Digital",
            "position": "maintenance specialist, web dev associate",
            "date": "Jan 2016 - April 2017",
            "desc": [
                "Responsive custom WordPress themes with HTML, SCSS, and Javascript",
                "Maintenance, repair, and modification of custom WordPress themes",
                "Organization and facilitation of inter-server migration of 100+ sites",
                "Customer correspondence regarding site maintenance and updates",
                "Server organization and maintenance using Python scripting"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "jQuery", "PHP", "WordPress", "ExpressionEngine", "Git"
            ]
        },
        {
            "company": "Nashville Software School",
            "position": "student of Full-Time Web Dev Cohort 23",
            "date": "Nov 2017 - May 2018",
            "desc": [
                "Source control and collaboration with Git/Hub and Trello using Agile/Scrum processes",
                "Responsive HTML & CSS, with and without preprocessors and frameworks",
                "Principles and fundamentals of object-oriented, DRY, modular JavaScript",
                "Single-page applications using JavaScript, jQuery, and AngularJS",
                "Server-side, test-driven Node development using Express, Chai, and Mocha",
                "Schema design, database organization, and API construction"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "JavaScript & jQuery", "AngularJS", "Node.js", "Git"
            ]
        }
    ];
    $scope.resume.reverse();
});