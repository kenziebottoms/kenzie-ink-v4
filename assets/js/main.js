"use strict";

angular.module("io", ['ui.router', require('angular-sanitize')]);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/home");
require("./ctrl/menu");
require("./ctrl/blog");
require("./ctrl/resume");
require("./ctrl/contact");
require("./ctrl/art");
require("./ctrl/code");
require("./ctrl/artPost");
require("./ctrl/codePost");

require("./factory/rest");