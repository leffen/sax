'use strict';

var app = angular.module('sax', ["clip","ngResource"])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.team = "Angular Berlin";
  }]);
