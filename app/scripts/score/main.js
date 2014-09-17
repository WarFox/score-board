define(["angular", "./controllers"], function (angular, controllers) {
  'use strict';

  var module = angular.module("score", []);

  module.controller("ScoreCtrl",controllers.ScoreCtrl);

  return module;
});
