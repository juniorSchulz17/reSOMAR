angular.module('app').controller('homeController', ['$scope', function($scope){

    $scope.hideElementAccess = function() {
        $('.card-access').animate({
            height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }

    $scope.hideElementGrafic = function() {
        $('.card-grafic').animate({
                height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }
}]);