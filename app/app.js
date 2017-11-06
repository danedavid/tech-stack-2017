var techApp = angular.module('techApp',['ngRoute'])
                  .config(function ($routeProvider, $locationProvider) {
                    $routeProvider.when('/home', {
                      templateUrl: 'templates/TechList.html',
                      controller: 'TechListController'
                    });
                    $routeProvider.when('/addtech', {
                      templateUrl: 'templates/AddTech.html',
                      controller: 'TechAddController'
                    });
                    $routeProvider.otherwise({
                      redirectTo: '/home'
                    });
                    $locationProvider.html5Mode({
                      enabled: true,
                      requireBase: false
                    });
                  });
