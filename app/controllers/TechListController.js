var TechListController = techApp.controller('TechListController', function ($scope, techData) {
  $scope.techList = null;
  techData.getList()
    .then((response) => {
      $scope.techList = response.data;
    })
    .catch((error) => {
      console.log('Error fetching data: ', error);
    });
  $scope.sortorder = '-year';
  $scope.filter = '';
});
