'use strict';

angular.module('clip', [ "ngResource"])

  .service('ClipService', ['$resource', function ($resource) {
    return {
      report: function (id) {
        return $resource("/api/report/:id",
                          {id: '@id'},
                          {query: {method: 'GET', isArray: true}}).query({id: id});}
    };
  }])
  .factory('ClipUtils', function() {
    var factory = {};

    factory.secondsToTime = function (seconds) {
      var hours   = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - (hours * 3600)) / 60);
      var seconds = seconds - (hours * 3600) - (minutes * 60);
      var time = "";

      if (hours != 0) {
        time = hours+":";
      }
      if (minutes != 0 || time !== "") {
        minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
        time += minutes+":";
      }
      if (time === "") {
        time = seconds+"s";
      }
      else {
        time += (seconds < 10) ? "0"+seconds : String(seconds);
      }
      return time;
    };

    return factory;
  })
  .controller('ClipController', ['$scope', 'ClipService','ClipUtils',
      function ($scope, ClipService,ClipUtils) {

        $scope.report_1_data = [{key: "test", values: []}];

        ClipService.report(1).$promise.then(function(data){
          $scope.report_1_data = [{key: "test", values: data}];
          console.log($scope.report_1_data);
        });

        $scope.data_x = function () {return function (d, i) {return d[2]}};
        $scope.data_y = function () {return function (d, i) {return d[1]}};

        // handle graphs
        $scope.xAxisTickFormatFunction = function () { return function (secs) {return ClipUtils.secondsToTime(secs);};};
        $scope.yAxisTickFormatFunction = function () {return function (d) {return ClipUtils.secondsToTime(d);};};


      }
]);


