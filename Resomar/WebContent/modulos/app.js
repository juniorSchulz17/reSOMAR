angular.module('app', ['ngRoute']);

angular.module('app').config(
    function ($httpProvider, $routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            templateUrl: 'View/home/home.html',
            controller : 'homeController',
            controllerAs : 'homeCtrl'
        }).when('/login', {
            templateUrl: 'View/login/login.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/index	', {
            templateUrl: 'View/home/home.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).otherwise({
            redirectTo: '/'
        });
    });

angular.module('app').directive('head', ['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
        return {
            restrict: 'E',
            link: function (scope, elem) {
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    $rootScope.activeTab = $location.path();
                });
            }
        };
    }]);