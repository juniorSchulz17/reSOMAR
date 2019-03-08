angular.module('app').controller('menuController', ['$scope', function($scope){

    $scope.hideMenu = function() {
        $('.ul').animate({
            height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }

}]);