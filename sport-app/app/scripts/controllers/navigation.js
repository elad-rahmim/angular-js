'use strict';

/**
 * @ngdoc function
 * @name sportAppApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the sportAppApp
 */
angular.module('sportAppApp')
  .controller('NavigationCtrl', function () {
        $(function(){
            var navMain = $("#bs-example-navbar-collapse-1");
            navMain.on("click", "a", null, function () {
                navMain.collapse('hide');
            });
        });
  });
