define(["angular"], function (angular) {
  'user strict';

  var ScoreCtrl = function ($scope) {

    $scope.newScore = {};

    $scope.players = [
      'Deepu',
      //'Nipun',
      'Ramachandran',
      //'Sayooj',
      //'Sooraj',
      'Vaishnav'
    ];

    $scope.totals = [];

    $scope.addPlayer = function(player) {
      $scope.players.push(player);
    };

    $scope.addScore = function(newScore) {
      console.log(newScore);
      var score = {"scores" : newScore};
      $scope.rounds.push(score);
      $scope.newScore = {};
      $('form:first *:input[type=text]:first').focus();
    };

    $scope.removeScore = function(index) {
      $scope.rounds.splice(index, 1);
    };

    $scope.init = function() {
      $scope.rounds = [];

      var rounds = localStorage.getItem("rounds");
      if (rounds!=null) {
        var obj = JSON.parse(rounds);
        $scope.rounds = obj;
      }

    };

    $scope.computeTotal = function() {
      var rounds = $scope.rounds;
      var totals = [];

      // set zero, dirty way
      rounds.map(function(round) {
        var scores = round.scores;

        for(var key in scores) {
          totals[key] = 0;
        }

      });

      rounds.map(function(round) {
        var scores = round.scores;

        for(var key in scores) {
          totals[key] += scores[key];
        }

      });

      console.log(totals);
      $scope.totals = totals;
    };

    $scope.$watchCollection("rounds", function() {
      localStorage.setItem("rounds", JSON.stringify($scope.rounds));
      $scope.computeTotal();
    });

  };

  return {
    ScoreCtrl: ScoreCtrl
  };

});
