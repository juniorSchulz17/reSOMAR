angular.module("app").controller("ongController", function ($uibModal) {
    const _self = this;
    _self.newOng = {};
    _self.editOng = {};

    _self.validateOngForm = () => {
        console.log(_self.newOng);
        if (!_self.newOng.ongName) {
            alert("Informe o nome da ONG");
            return false;
        }
        if (!_self.newOng.cnpjOng) {
            alert("Informe o CNPJ");
            return false;
        }
        if (!_self.newOng.CNPJ) {
            alert("Informe o estado");
            return false;
        }
        if (!_self.newOng.city) {
            alert("Informe a cidade");
            return false;
        }
    }

    _self.validateOngEditForm = () => {
        if (!_self.editOng.ongName) {
            alert("Informe o nome da ONG");
            return false;
        }
        if (!_self.editOng.cnpjOng) {
            alert("Informe o CNPJ");
            return false;
        }
        if (!_self.editOng.state) {
            alert("Informe o estado");
            return false;
        }
        if (!_self.editOng.city) {
            alert("Informe a cidade");
            return false;
        }
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/ong/editModal.html',
            controller: 'ongController',
            controllerAs: 'ongCtrl',
            size: size,
            windowClass: 'show',
            backdropClass: 'show'
        });
        $uibModal.modal = modalInstance;
    }

    //close modal function
    _self.closeModal = () => {
        $uibModal.modal.close();
    }

});