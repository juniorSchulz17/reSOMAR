angular.module("app").controller("clinicController", function ($uibModal) {

    const _self = this;
    _self.newClinic = {};
    _self.editClinic = {};

    _self.validateClinic= () => {
        console.log(_self.newClinic);
        if (!_self.newClinic.name) {
            alert("Informe o nome");
            return false;
        }
        if (!_self.newClinic.tel) {
            alert("Informe o telefone");
            return false;
        }
        if (!_self.newClinic.cnpj) {
            alert("Informe o cnpj");
            return false;
        }
        if (!_self.newClinic.zipCode) {
            alert("Informe o CEP");
            return false;
        }
        if (!_self.newClinic.address) {
            alert("Informe o endereço");
            return false;
        }
        if (!_self.newClinic.number) {
            alert("Informe o número");
            return false;
        }
        if (!_self.newClinic.district) {
            alert("Informe o bairro");
            return false;
        }
        if (!_self.newClinic.state) {
            alert("Informe o estado");
            return false;
        }
        if (!_self.newClinic.city) {
            alert("Informe a cidade");
            return false;
        }
    }

    //validate input in modal
    _self.validateClinicEdit = () => {
        if (!_self.editClinic.name) {
            alert("Informe o nome");
            return false;
        }
        if (!_self.editClinic.tel) {
            alert("infome o telefone");
            return false;
        }
        if (!_self.editClinic.cnpj) {
            alert("Informe o cnpj");
            return false;
        }
        if (!_self.editClinic.zipCode) {
            alert("Informe o CEP");
            return false;
        }
        if (!_self.editClinic.address) {
            alert("Informe o endereço");
            return false;
        }
        if (!_self.editClinic.number) {
            alert("Informe o número");
            return false;
        }
        if (!_self.editClinic.district) {
            alert("Informe o bairro");
            return false;
        }
        if (!_self.editClinic.state) {
            alert("Informe o estado");
            return false;
        }
        if (!_self.editClinic.city) {
            alert("Informe a cidade");
            return false;
        }
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/clinic/editModal.html',
            controller: 'clinicController',
            controllerAs: 'clinicCtrl',
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