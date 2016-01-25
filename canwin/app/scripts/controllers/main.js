'use strict';

/**
 * @ngdoc function
 * @name canwinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the canwinApp
 */
angular.module('canwinApp')
    .controller('MainCtrl', function ($scope,$routeParams,wp ) {

        $scope.page=0;
        $scope.busy=true;
        var count='10';


        $scope.init= function(){
            var category='all';

            if($routeParams.category){
                category=$routeParams.category;
            }
            wp.getPosts(count,$scope.page,category).then(function (response){

                $scope.posts = response.data.posts;
                $scope.maxpages=response.data.pages;
                $scope.busy=false;


            });
        };

        $scope.init();

        $scope.loadMore = function () {

            if(!$scope.busy){
                var category=$routeParams.category;

                if($scope.page < $scope.maxpages){
                    wp.getPosts(count,$scope.page,category).then(function (response){
                        $scope.maxpages=response.data.pages;
                        angular.forEach(response.data.posts,function(item) {

                            $scope.posts.push(item);
                        });
                        $scope.busy=false;

                    });
                }
            }
        };
    });
