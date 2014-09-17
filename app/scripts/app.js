define(["angular", "common", "game", "score"], function (angular) {

	'use strict';

	var module = angular.module('score-app', [ 'game','score','directives.integer', 'ngRoute', 'ngCookies','ngResource','ngSanitize']);

	module.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/score.html',
					controller: 'ScoreCtrl'
				})
				.when('/new', {
					templateUrl: 'views/game.html',
					controller: 'GameCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
	});

	return module;

});
