angular.module('app', ['infinite-scroll']);

var app = angular.module('app', ['infinite-scroll']);

app.controller('Controller', function($scope, $http) {

  var from = -14,
      itemsPerPage = 15;

  $scope.loadMore = function() {
    from += itemsPerPage;
    var url = 'http://localhost:3000/api/1/stats/from/' +
        (from + 1) + '/to/' + (from + itemsPerPage);
    $http.get(url).success(function(lines) {
      $scope.items = $scope.items || [];
      lines.split('\n').forEach(function(line) {
        if (line !== '') $scope.items.push(line.split(','));
      });
    });
  };

  $scope.handleEmpty = function(value) {
    return value.trim() === '' ? '-' : value;
  };
});
