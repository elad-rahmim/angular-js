'use strict';

/**
 * @ngdoc overview
 * @name canwinApp
 * @description
 * # canwinApp
 *
 * Main module of the application.
 */
angular
  .module('canwinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'ngTouch'
  ])

  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/:category', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/viewpost/:postId', {
            templateUrl: 'views/viewpost.html',
            controller: 'ViewpostCtrl',
            controllerAs: 'viewpost'
        })
      .otherwise({
        redirectTo: '/all'
      });

        $locationProvider.hashPrefix('!');


  });
