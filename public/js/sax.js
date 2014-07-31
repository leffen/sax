'use strict';

var app = angular.module('sax', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.team = "Angular Berlin"; 
  }]);
