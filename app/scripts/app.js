'use strict';

/**
 * @ngdoc overview
 * @name jobInterviewApp
 * @description
 * # jobInterviewApp
 *
 * Main module of the application.
 */
angular
  .module('jobInterviewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/addPost', {
        templateUrl: 'views/addpost.html',
        controller: 'AddpostCtrl',
        controllerAs: 'addPost'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
