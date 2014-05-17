define(["angular", "common", "score"], function (angular) {

	'use strict';

	var module = angular.module('score-app', [ 'score','directives.integer','ngCookies','ngResource','ngSanitize']);

	return module;

});
