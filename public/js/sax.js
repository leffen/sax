'use strict';

var app = angular.module('sax', ["nvd3ChartDirectives","clip","ngResource"])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.team = "Angular Berlin";
  }]);
