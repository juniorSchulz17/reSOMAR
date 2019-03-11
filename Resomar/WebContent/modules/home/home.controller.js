angular.module('app').controller('homeController', function(){
    const _self = this;

    _self.hideElementAccess = () => {
        $('.card-access').animate({
            height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }

    _self.hideElementGrafic = () => {
        $('.card-grafic').animate({
                height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }
});