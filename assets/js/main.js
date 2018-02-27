"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("io", [ngRoute]);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/art");
require("./ctrl/code");
require("./ctrl/artPost");
require("./ctrl/codePost");

require("./factory/rest");