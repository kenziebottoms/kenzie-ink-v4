"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("io", [ngRoute]);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/blog");
require("./ctrl/post");

require("./factory/rest");