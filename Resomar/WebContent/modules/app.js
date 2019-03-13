angular.module('app', ['ngAnimate', 'ngRoute','ui.bootstrap']);

angular.module('app').config(
    function ($httpProvider, $routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            templateUrl: 'View/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        }).when('/entrar', {
            templateUrl: 'View/login/login.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'

        }).when('/usuario', {
            templateUrl: 'View/user/user.html',
            controller: 'userController',
            controllerAs: 'userCtrl'

        }).when('/principal	', {
            templateUrl: 'View/home/home.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/clinica', {
            templateUrl: 'View/clinic/clinic.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/doacao', {
            templateUrl: 'View/donate/donate.html'
            // controller : 'homeController',
            // controllerAs : 'homeCtrl'

        }).when('/especialidade', {
            templateUrl: 'View/speciality/speciality.html',
            controller : 'specialityController',
            controllerAs : 'specialityCtrl'

        }).when('/ong', {
            templateUrl: 'View/ong/ong.html',
            controller : 'ongController',
            controllerAs : 'ongCtrl'

        }).when('/especialista', {
            templateUrl: 'View/specialist/specialist.html',
            controller : 'specialistController',
            controllerAs : 'specialistCtrl'

        }).when('/necessidade', {
            templateUrl: 'View/needs/needs.html',
            controller : 'needsController',
            controllerAs : 'needsCtrl'

        }).when('/paciente', {
            templateUrl: 'View/patient/patient.html',
            controller : 'patientController',
            controllerAs : 'patientCtrl'

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