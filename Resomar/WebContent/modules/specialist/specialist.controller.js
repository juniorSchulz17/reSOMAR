angular.module("app").controller("specialistController", function ($uibModal) {
    const _self = this;

    _self.validateSpecialistForm = () => {
        if (!_self.name) {
            alert("Informe o nome");
            return false;
        }
        if (!_self.lastName) {
            alert("Informe o sobrenome");
            return false;
        }
        if (!_self.email) {
            alert("Informe o email");
            return false;
        }
        if (!_self.landLine) {
            alert("Informe o telefone fixo");
            return false;
        }
        if (!_self.celPhone) {
            alert("Informe o celular");
            return false;
        }
        if (!_self.advice) {
            alert("Informe o conselho");
            return false;
        }
        if (!_self.adviceNumber) {
            alert("Informe o número do conselho");
            return false;
        }
        if (!_self.speciality) {
            alert("Informe a especilidade");
            return false;
        }
    }

    _self.validateSpecialistFormEdit = () => {

    }



    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/specialist/editModal.html',
            controller: 'specialistController',
            controllerAs: 'specialistCtrl',
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