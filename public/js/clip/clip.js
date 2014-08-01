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
  .controller('ClipController', ['$scope', 'ClipService',
      function ($scope, ClipService) {

        $scope.report_1_data = [{key: "test", values: []}];

        ClipService.report(1).$promise.then(function(data){
          $scope.report_1_data = data;
          console.log(data);
        });
      }
]);


