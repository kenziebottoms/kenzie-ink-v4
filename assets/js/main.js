"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

angular.module("io", [ngRoute]);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/menu");
require("./ctrl/blog");
require("./ctrl/contact");
require("./ctrl/art");
require("./ctrl/code");
require("./ctrl/artPost");
require("./ctrl/codePost");

require("./factory/rest");