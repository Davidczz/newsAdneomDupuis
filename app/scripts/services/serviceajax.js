'use strict';

/**
 * @ngdoc service
 * @name jobInterviewApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the jobInterviewApp.
 */
angular.module('jobInterviewApp')
  .factory('serviceAjax', function ($http) {
    return {
      listNews: function (){
        return $http.get('http://adneom.herokuapp.com/api/posts');
      },
      voteUp: function(postId){
        return $http.put('http://adneom.herokuapp.com/api/posts/' + postId + '/upvote');
      },
      getNewsById: function(postId){
        return $http.get('http://adneom.herokuapp.com/api/posts/' + postId);
      },
      addComment: function(postId, author, message){
        var options = {
          'author': author,
          'body': message
        };
        return $http.post('http://adneom.herokuapp.com/api/posts/'+ postId +'/comments', options);
      },
      addNews: function(link, title){
        var options = {
          'link': link,
          'title': title
        };
        return $http.post('http://adneom.herokuapp.com/api/posts', options);
      }
    };
  });
