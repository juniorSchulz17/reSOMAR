angular.module('app', ['ngRoute','ui.bootstrap']);

angular.module('app').config(
    function ($httpProvider, $routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            templateUrl: 'View/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        }).when('/login', {
            templateUrl: 'View/login/login.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'

        }).when('/user', {
            templateUrl: 'View/user/user.html'
            // controller: 'loginController',
            // controllerAs: 'login'

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
            templateUrl: 'View/specialty/specialty.html',
            controller : 'specialityController',
            controllerAs : 'specialityCtrl'

        }).when('/institution', {
            templateUrl: 'View/institution/institution.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/specialist', {
            templateUrl: 'View/specialist/specialist.html'
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

angular.module('app').directive('focus', function($timeout, $parse) {
    return {
        link: function(scope, element, attrs) {
            var model = $parse(attrs.focus);
            scope.$watch(model, function(value) {
                if(value === true) {
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
        }
    };
});