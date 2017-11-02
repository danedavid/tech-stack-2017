var TechAddController = techApp.controller('TechAddController', function ($scope) {
  $scope.currentTech = {
    name: '',
    type: '',
    year: 2000,
    org: '',
    currentVersion: '',
    imageUrl: '',
    description: ''
  };
  $scope.handleSubmit = () => {
    console.log(JSON.stringify($scope.currentTech));
    window.location = 'TechList.html';
  }
});
