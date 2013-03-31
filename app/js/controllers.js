'use strict';

/* Controllers */


function AppCtrl($scope, $http, $log) {
  $scope.organization = 'github';
  $scope.members = [];
  $scope.repos = [];
  $scope.commits = [];

  $scope.getMembers = function(organization){
    $log.log("Wanna know about " + organization + ", huh?");
    $http.get('json/members.json').success(function(data){
      $scope.members = data.data;
    });
  }

  $scope.getRepos = function(member){
    $log.log("Wanna get repos from " + member + ", huh?");
    $http.get('json/repos.json').success(function(data){
      $scope.repos = data.data;
    });
  }

  $scope.getCommits = function(repo){
    $log.log("Wanna get commits from " + repo + ", huh?");
    $http.get('json/commits.json').success(function(data){
      $scope.commits = data.data;
    });
  }
}
//MyCtrl1.$inject = [];
