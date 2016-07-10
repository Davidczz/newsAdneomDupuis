'use strict';

/**
 * @ngdoc function
 * @name jobInterviewApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the jobInterviewApp
 */
angular.module('jobInterviewApp')
  .controller('AddpostCtrl', function ($scope, serviceAjax, $location) {
    $scope.addNews = function(){
      if($scope.title && $scope.link){
        serviceAjax.addNews($scope.link, $scope.title).error(function(){
          $scope.error = 'An error occurred, please try again later';
        }).success(function(data){
          console.log(data._id);
          $location.path('/#/post/'+data._id);
          $scope.success = 'News added successfully';
        });
      }else{
        $scope.error = 'All fields are required';
      }

    };
  });
