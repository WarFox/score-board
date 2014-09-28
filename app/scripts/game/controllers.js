define(['angular'], function (angular) {
  'use strict';

  var GameCtrl = function($scope) {
    $scope.test = {
      'abcd' : 'abcd'
    };
  };

  return {
    'GameCtrl': GameCtrl
  };

});
