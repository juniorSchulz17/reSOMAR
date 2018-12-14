angular.module('app', ['ngRoute']);

angular.module('app').config(function($httpProvider, $routeProvider, $locationProvider) {
	console.log($routeProvider);
	
	$locationProvider.hashPrefix('');
	$routeProvider.when('/', {
		templateUrl : '../home/home.html'
//		controller : 'homeController',
//		controllerAs : 'homeCtrl'
	})
	.when('/login', {
		templateUrl : '../login/login.html'
//		controller : 'homeController',
//		controllerAs : 'homeCtrl'

	})
	.otherwise({
		redirectTo : '/'
	});
});