'use strict';

/**
 * @ngdoc function
 * @name jobInterviewApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the jobInterviewApp
 */
angular.module('jobInterviewApp')
  .controller('PostCtrl', function ($scope, $routeParams, serviceAjax) {

    $scope.loadData = function(){
      serviceAjax.getNewsById($routeParams.id).success(function(data){
        data.numberComments = data.comments.length;
        $scope.post = data;
      });
    };

    $scope.loadData();

    $scope.addComment = function(postId){
      var author = $scope.author;
      var body = $scope.commentText;
      if(author && body){
        serviceAjax.addComment(postId, author, body).success(function(){
          $scope.success = 'Your comment had been added successfully';
          $scope.error = '';
          $scope.loadData();
        }).error(function(){
          $scope.error = 'An error occurred, please try again later';
          $scope.success = '';
        });
      }else{
        $scope.error = 'All fields are required';
        $scope.success = '';
      }
    };
  });
