angular.module('app').controller('loginController', loginController);

function loginController() {
    const _self = this;

    _self.validateLogin = () => {
        if (!_self.userName) {
            alert("Informe seu nome de usuário");
            return false;
        }
        if (!_self.password) {
            alert("Informe sua senha");
            return false;
        }

        alert("Parabéns");
        return false;
    }
}

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