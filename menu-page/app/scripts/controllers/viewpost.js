'use strict';

/**
 * @ngdoc function
 * @name menuPageApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the menuPageApp
 */
angular.module('menuPageApp')
    .controller('ViewpostCtrl', function ($scope,$routeParams,wp  ) {

        wp.getPost($routeParams.postid).then(function (response){

            $scope.title =response.data.post.title;

            var rendered = angular.element('<div></div>');

            rendered.append(response.data.post.content);
            rendered.find('div').removeClass();
            rendered.find('img')
                .removeClass()
                .addClass('img-responsive center-block')
                .wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

            $scope.content = rendered.html();

        });
    });
