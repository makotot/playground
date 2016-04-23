var app = angular.module('myApp', ['ui.router']);

app
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('top');

    $stateProvider.state('top', {
      url: '/',
      templateUrl: 'top.html',
      controller: 'topCtrl as ctrl'
    });
  });

