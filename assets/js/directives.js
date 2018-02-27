"use strict";

const angular = require("angular");
const $ = require("jquery");

angular.module("io").directive("ngScript", () => {
    return {
        link: function (scope, element, attrs) {
            $.getScript(attrs.ngScript);
        }
    };
});