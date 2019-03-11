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
    }
}