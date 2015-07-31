angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // give scope data property and getLinks method
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function(data) {
      // use data to ng-repeat in view
      $scope.data.links = data;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.getLinks();

});
