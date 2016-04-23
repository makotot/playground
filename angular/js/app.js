var app = angular.module('myApp', ['ui.router', 'ngStorage']);

app
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('top', {
      url: '/',
      templateUrl: 'templates/top.html',
      controller: 'topCtrl as ctrl'
    });
  });

app.controller('topCtrl', ['$localStorage', function ($localStorage) {

  this.$storage = $localStorage.$default({
    todos: []
  });

  this.save = function () {
    if (!this.todo) {
      return;
    }

    this.$storage.todos.push({
      todo: this.todo,
      done: false
    });
  };

  this.resetAll = function () {
    this.$storage.$reset();
  };

}]);
