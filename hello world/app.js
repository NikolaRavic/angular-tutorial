//code goes here
(function (){

angular.module("myApp",["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
          .when("/main", {
              templateUrl: "templates/Main.html",
              controller: "MainCtrl"
          })
          .when("/user/:username",{
              templateUrl:"templates/User.html",
              controller: "UserController"
          })
          .when("/repo/:username/:reponame",{
              templateUrl:"templates/Repo.html",
              controller: "RepoController"
          })
          .otherwise({redirectTo: "/main"});
  });
})();
