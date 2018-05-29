define(function(require, exports, module) {
	'use strict';

	module.name = 'idfc-otp-generate';

	var base = require('base');
	var core = require('core');
	var ui = require('ui');

	

	var deps = [
		core.name,
		ui.name
	];

       
	module.exports = base.createModule(module.name, deps)
		.directive(require('./directives/otpGenerateDirective'))
		.controller(require('./directives/otpGenerateController'))
		.service(require('./services/otpService'));
});
