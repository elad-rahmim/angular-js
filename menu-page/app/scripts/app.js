'use strict';

/**
 * @ngdoc overview
 * @name menuPageApp
 * @description
 * # menuPageApp
 *
 * Main module of the application.
 */
angular
  .module('menuPageApp', [
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
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/mainpage', {
            templateUrl: 'views/mainpage.html',
            controller: 'MainpageCtrl',
            controllerAs: 'mainpage'
        })
        .otherwise({
            redirectTo: '/all'
        });

        $locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);
  });
