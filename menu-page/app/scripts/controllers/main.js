'use strict';

/**
 * @ngdoc function
 * @name menuPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menuPageApp
 */
angular.module('menuPageApp')
    .controller('MainCtrl', function ($scope,$routeParams,wp ) {

        $scope.page=0;
        var count='10';
        $scope.posts=[];

        $scope.init= function(){
            var category=$routeParams.category;

            wp.getPosts(count,$scope.page,category).then(function (response){

                $scope.posts = response.data.posts;
                $scope.maxpages=response.data.pages;

            });
        };

        $scope.init();

        $scope.loadMore = function () {

            $scope.page++;

            var category=$routeParams.category;

            if($scope.page < $scope.maxpages){
                wp.getPosts(count,$scope.page,category).then(function (response){
                    $scope.maxpages=response.data.pages;
                    angular.forEach(response.data.posts,function(item) {
                        $scope.posts.push(item);
                    });
                });
            }
        };
    });

