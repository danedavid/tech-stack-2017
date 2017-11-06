techApp.factory('techData', function ($http) {
  let dataFactory = {};

  dataFactory.getList = () => {
    return $http.get('http://localhost:3000/techData');
  };

  return dataFactory;
});
