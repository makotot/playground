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

  this.init = function () {
    this.$storage = $localStorage.$default({
      todos: [
      ]
    });
  };

  this.save = function () {
    if (!this.todo) {
      return;
    }

    if (!this.$storage.todos) {
      this.init();
    }

    this.$storage.todos.unshift({
      todo: this.todo,
      memo: this.memo || '',
      done: false
    });
  };

  this.resetAll = function () {
    this.$storage.$reset();
  };

  this.done = function (index) {
    this.$storage.todos.splice(index, 1);
  };

  this.init();
}]);
