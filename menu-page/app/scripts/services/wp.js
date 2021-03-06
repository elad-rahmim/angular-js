'use strict';

/**
 * @ngdoc service
 * @name menuPageApp.wp
 * @description
 * # wp
 * Factory in the menuPageApp.
 */
angular.module('menuPageApp')
    .factory('wp', function ($q,$http) {

        var API_URL = 'http://www.offerstake.com';
        var wp={};

        wp.getCategories =  function() {
            return $http.get(API_URL + '/api/get_category_index/');
        };

        wp.getPost = function(postId){
            return $http.get(API_URL+'/api/get_post/?post_id='+postId);
        };

        wp.getPosts = function(count,page,category){

            var apiurl='';
            if(category!=='all'){
                apiurl=API_URL+'/api/get_category_posts/?slug='+category+'&count='+count+'&page='+page.toString();
            }else{
                apiurl=API_URL+'/api/get_posts/?count='+count+'&page='+page.toString();
            }

            return $http.get(apiurl);

        };

        return wp;

    });
