define([
  'angular',
],function (angular) {
  var app = angular.module('index', []);
  app.controller('indexController', function ($scope) {
      $scope.name = '王文琪';
      $scope.action = '我爱你';
  });

  return {
    init: function () {
      angular.bootstrap(document, ['index']);
    }
  }
})
