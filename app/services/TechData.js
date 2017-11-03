techApp.factory('techData', function ($http) {
  let data;
  $http.get('localhost:3000/techData')
    .then((response) => {
      data = response.data;
    });

    return {
      techData: data
    };
});
