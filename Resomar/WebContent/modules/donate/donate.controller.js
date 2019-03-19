angular.module("app").controller("donateController", function ($uibModal) {

    const _self = this;
    _self.newDonate = {};
    _self.editDonate = {};

    _self.validateDonate= () => {
        console.log(_self.newDonate);
        if (!_self.newDonate.donateType) {
            alert("Informe o tipo de doação");
            return false;
        }
        if (_self.newDonate.donateType == "consult" && !_self.newDonate.quantityConsult) {
            alert("Informe a quantidade de consultas");
            return false;
        }
        if (_self.newDonate.donateType == "consult" && !_self.newDonate.clinicConsult) {
            alert("Informe a clinica responsável");
            return false;
        }

        if (_self.newDonate.donateType == "exams" && !_self.newDonate.quantityExams) {
            alert("Informe a quantidade de exames");
            return false;
        }
        if (_self.newDonate.donateType == "exams" && !_self.newDonate.complexExams) {
            alert("Informe a complexidade");
            return false;
        }
        if (_self.newDonate.donateType == "exams" && !_self.newDonate.clinicExams) {
            alert("Informe a clinica responsável");
            return false;
        }

        if (_self.newDonate.donateType == "donate" && !_self.newDonate.quantityDonate) {
            alert("Informe a quantidade de doações");
            return false;
        }
        if (_self.newDonate.donateType == "donate" && !_self.newDonate.clinicDonate) {
            alert("Informe a clinica responsável");
            return false;
        }
    }

    //validate input in modal
    _self.validateDonateEdit = () => {
        if (!_self.editDonate.donateType) {
            alert("Informe o tipo de doação");
            return false;
        }
        if (_self.editDonate.donateType == "consult" && !_self.editDonate.quantityConsult) {
            alert("Informe a quantidade de consultas");
            return false;
        }
        if (_self.editDonate.donateType == "consult" && !_self.editDonate.clinicConsult) {
            alert("Informe a clinica responsável");
            return false;
        }

        if (_self.editDonate.donateType == "exams" && !_self.editDonate.quantityExams) {
            alert("Informe a quantidade de exames");
            return false;
        }
        if (_self.editDonate.donateType == "exams" && !_self.editDonate.complexExams) {
            alert("Informe a complexidade");
            return false;
        }
        if (_self.editDonate.donateType == "exams" && !_self.editDonate.clinicExams) {
            alert("Informe a clinica responsável");
            return false;
        }

        if (_self.editDonate.donateType == "donate" && !_self.editDonate.quantityDonate) {
            alert("Informe a quantidade de doações");
            return false;
        }
        if (_self.editDonate.donateType == "donate" && !_self.editDonate.clinicDonate) {
            alert("Informe a clinica responsável");
            return false;
        }
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/donate/editModal.html',
            controller: 'donateController',
            controllerAs: 'donateCtrl',
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