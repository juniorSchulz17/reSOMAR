angular.module('app').controller('userController', userController);

function userController() {
    const _self = this;

    _self.validateRegister = () => {
        if (!_self.name) {
            alert("Informe seu nome");
            return false;
        }
        if (!_self.lastName) {
            alert("Informe seu sobrenome");
            return false;
        }
        if (!_self.telephone) {
            alert("Informe seu telefone");
            return false;
        }
        if (!_self.email) {
            alert("Informe seu email");
            return false;
        }
        if (!_self.password) {
            alert("Informe sua senha");
            return false;
        }
        if (!_self.confirmPassword) {
            alert("Informe a confirmação da senha");
            return false;
        }
        if (_self.confirmPassword != _self.password ) {
            alert("As senhas informadas não correspondem");
            return false;
        }
        if (!_self.inlineMaterialRadiosExample) {
            alert("Informe o tipo de acesso");
            return false;
        }
    }
}