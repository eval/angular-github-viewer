'use strict';

/* Controllers */


function AppCtrl($scope, $http, $log) {
  $scope.members = [];

  $scope.action = function(organization){
    $log.log("Wanna know about " + organization + ", huh?");
    $http.get('json/members.json').success(function(data){
      $scope.members = data.data;
    });
  }
}
//MyCtrl1.$inject = [];
