angular.module('app', ['ngRoute']);

angular.module('app').config(function($httpProvider, $routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when('/', {
		templateUrl : '../home/home.html'
//		controller : 'homeController',
//		controllerAs : 'homeCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
});