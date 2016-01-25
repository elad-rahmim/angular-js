'use strict';

/**
 * @ngdoc function
 * @name canwinApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the canwinApp
 */
angular.module('canwinApp')
    .controller('NavbarCtrl', function ($scope,wp) {

        wp.getCategories().then(function (response){
            $scope.categories=response.data.categories;
        });


    });
