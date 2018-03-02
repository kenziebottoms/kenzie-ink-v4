"use strict";

const angular = require("angular");

angular.module("io", [require("angular-route"), require('angular-sanitize')]);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/menu");
require("./ctrl/blog");
require("./ctrl/links");
require("./ctrl/resume");
require("./ctrl/contact");
require("./ctrl/art");
require("./ctrl/code");
require("./ctrl/artPost");
require("./ctrl/codePost");

require("./factory/rest");