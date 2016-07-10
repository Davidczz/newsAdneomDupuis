'use strict';

/**
 * @ngdoc function
 * @name jobInterviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobInterviewApp
 */
angular.module('jobInterviewApp')

  .controller('MainCtrl', function ($scope, serviceAjax) {
    $scope.name = 'Test';
    var loadNews = function () {
      $scope.news = [];
      serviceAjax.listNews().success(function(data){
        var newsResult = data;
        angular.forEach(newsResult, function (value) {
          if (value.title) {
            value.voteUpDone = false;
            value.numberComments = value.comments.length;
            $scope.news.push(value);
          }
        });
      });

    };

    loadNews();

    $scope.voteUp = function (postId) {
      serviceAjax.voteUp(postId).success(function(){
        loadNews();
        setVotedOnLocalList(postId);
      });
    };

  });
