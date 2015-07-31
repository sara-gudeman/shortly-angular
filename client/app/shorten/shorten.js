angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addLink($scope.link)
    .then(function() {
      // ???
    })
    .catch(function (error) {
      console.error(error);
    });
  };

});
