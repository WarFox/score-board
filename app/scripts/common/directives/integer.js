define(["angular"], function (angular) {
  'use strict';

  var module = angular.module("directives.integer", []);

  module.directive('integer', function () {
    return {
      require: 'ngModel',
      link: function (scope, ele, attr, ctrl) {
        ctrl.$parsers.unshift(function (viewValue) {
          return parseInt(viewValue);
        });
      }
    };
  });

  return module;

});
