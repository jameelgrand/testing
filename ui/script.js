var app = angular.module('StarterApp', ['ngMaterial',"ngRoute"]);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('pink')
    .dark();
});
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "./partials/base.html",
      controller: 'baseCtrl'
  })
  .when("/features", {
      templateUrl : "./partials/feature.html",
      controller : "londonCtrl"
  })
  .when("/docs", {
      templateUrl : "./partials/docs.html",
      controller : "parisCtrl"
  });
});
app.controller("baseCtrl", function($scope, $mdDialog){
  $scope.showAdvanced = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './partials/dialog.html',
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application to prevent interaction outside of dialog
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    }).then(function (answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function () {
      $scope.status = 'You cancelled the dialog.';
    });
  };
  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }
});
app.controller("londonCtrl", function ($scope) {
  $scope.msg = "I love feature";
});
app.controller("parisCtrl", function ($scope) {
  $scope.msg = "I love docs";
});
app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);