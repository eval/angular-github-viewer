'use strict';

/* Controllers */


function AppCtrl($scope, $http, $log) {
  $scope.organization = 'github';
  var reset = function() {
    $scope.members = [];
    $scope.repos = [];
    $scope.commits = [];
    $scope.current_member = null;
    $scope.current_repo = null;
  }
  reset();

  $scope.getMembers = function(organization){
    reset();
    $log.log("Wanna know about " + organization + ", huh?");
    $http.jsonp("https://api.github.com/orgs/" + organization + "/members?callback=JSON_CALLBACK").success(function(data){
      $scope.members = data.data;
    });
  }

  $scope.getRepos = function(member){
    $scope.current_member = member;
    $log.log("Wanna get repos from " + member + ", huh?");
    $http.jsonp("https://api.github.com/users/" + member + "/repos?callback=JSON_CALLBACK").success(function(data){
      $scope.repos = data.data;
    });
  }

  $scope.getCommits = function(repo){
    $scope.current_repo = repo;
    $log.log("Wanna get commits from " + repo + ", huh?");
    $http.jsonp("https://api.github.com/repos/" + $scope.current_member + "/" + repo + "/commits?callback=JSON_CALLBACK").success(function(data){
      $scope.commits = data.data;
    });
  }
}
//MyCtrl1.$inject = [];
