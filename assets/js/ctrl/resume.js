"use strict";

angular.module("io").controller("ResumeCtrl", function ($scope) {
    $scope.resume = [
        {
            "company": "Hereit.org",
            "position": "freelance developer",
            "date": "June 2013 - May 2015",
            "desc": [
                "Front-end redesign and custom HTML5 audio player with HTML/CSS and jQuery",
                "Repair and expansion of user and admin features with PHP and MySQL",
                "Stripe e-commerce subscriptions and payments"
            ],
            "tech": [
                "HTML", "CSS", "PHP", "MySQL", "JavaScript", "jQuery", "Stripe e-Commerce"
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
                "HTML", "JavaScript", "Photoshop"
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
                "HTML", "CSS", "jQuery", "PHP", "WordPress"
            ]
        },
        {
            "company": "G/O Digital",
            "position": "maintenance specialist, web dev associate",
            "date": "Jan 2016 - April 2017",
            "desc": [
                "Maintenance and repair of custom WordPress themes based on correspondence with clients",
                "Administrative maintenance and inter-server migration of 100+ sites using Python scripting"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "jQuery", "PHP", "WordPress", "ExpressionEngine", "Git"
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
                "HTML", "CSS", "jQuery", "PHP", "WordPress", "Git"
            ]
        },
        {
            "company": "Nashville Software School",
            "position": "student of Full-Time Web Dev Cohort 23",
            "date": "Nov 2017 - May 2018",
            "desc": [
                "Source control and collaboration with Git/Hub, Trello, and Agile/Scrum processes",
                "Full-stack Node.js development with JavaScript, jQuery, and AngularJS"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "JavaScript", "Git", "jQuery", "AngularJS", "Node.js & Express", "PostgreSQL"
            ]
        },
        {
            "company": "MERGE Digital",
            "position": "freelance developer",
            "date": "July 2018 - August 2018",
            "desc": [
                "Responsive custom WordPress themes built with Roots.io using SCSS"
            ],
            "tech": [
                "HTML", "SCSS/CSS", "JavaScript", "Git", "jQuery", "PHP"
            ]
        }
    ];
    $scope.resume.reverse();
});