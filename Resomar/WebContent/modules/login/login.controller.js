angular.module('app').controller('loginController', loginController);

function loginController() {
    const _self = this;
    _self.userName = '';
    _self.password = '';

    _self.validateLogin = () => {
        if (_self.userName.length === 0) {
            alert("Informe seu nome de usuário");
            return false;
        }
        if (_self.password.length === 0) {
            alert("Informe sua senha");
            return false;
        }


    }
}