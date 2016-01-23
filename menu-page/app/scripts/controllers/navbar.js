'use strict';

/**
 * @ngdoc function
 * @name menuPageApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the menuPageApp
 */
angular.module('menuPageApp')
    .controller('NavbarCtrl', function ($scope,wp) {

        wp.getCategories().then(function (response){
            $scope.categories=response.data.categories;
        });


    });

