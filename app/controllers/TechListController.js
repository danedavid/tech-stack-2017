var TechListController = techApp.controller('TechListController', function ($scope, techData) {
  $scope.techList = techData.techData;
  $scope.sortorder = '-year';
  $scope.filter = '';
});
