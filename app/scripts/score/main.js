define(["angular", "./controllers"], function (angular, controllers) {
  'use strict';

  var module = angular.module("score", ["ngRoute"]);

  module.controller("ScoreCtrl",controllers.ScoreCtrl);

  module.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/score.html',
          controller: 'ScoreCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  });

  return module;
});
