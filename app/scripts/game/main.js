define(["angular", "./controllers"], function(angular, controllers) {

	var module = angular.module("game", []);

	module.controller('GameCtrl', controllers.GameCtrl);

	return module;
});
