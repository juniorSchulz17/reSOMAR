angular.module('app', ['ngRoute']);

angular.module('app').config(
    function ($httpProvider, $routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            templateUrl: 'View/home/home.html',
            controller : 'homeController',
            controllerAs : 'homeCtrl'
        }).when('/login', {
            templateUrl: 'View/login/login.html',
            controller : 'loginController',
            controllerAs : 'loginCtrl'

        }).when('/index	', {
            templateUrl: 'View/home/home.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/clinic', {
            templateUrl: 'View/clinic/clinic.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/donate', {
            templateUrl: 'View/donate/donate.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/specialty', {
            templateUrl: 'View/specialty/specialty.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/institution', {
            templateUrl: 'View/institution/institution.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/medic', {
            templateUrl: 'View/medic/medic.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/needs', {
            templateUrl: 'View/needs/needs.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/patient', {
            templateUrl: 'View/patient/patient.html'
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