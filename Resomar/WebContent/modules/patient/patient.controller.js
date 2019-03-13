angular.module("app").controller("patientController", function ($uibModal) {

    const _self = this;
    _self.newPatient = {};
    _self.editPatient = {};

    _self.validatePatient= () => {
        console.log(_self.newPatient);
        if (!_self.newPatient.identification) {
            alert("Informe a identificação");
            return false;
        }
        if (!_self.newPatient.age) {
            alert("Informe a idade");
            return false;
        }
        if (!_self.newPatient.responsible) {
            alert("Informe o responsável");
            return false;
        }
        if (!_self.newPatient.institution) {
            alert("Informe a instituição");
            return false;
        }
    }

    //validate input in modal
    _self.validatePatientEdit = () => {
        if (!_self.editPatient.identificationEdit) {
            alert("Informe a identificação");
            return false;
        }
        if (!_self.editPatient.ageEdit) {
            alert("Informe a idade");
            return false;
        }
        if (!_self.editPatient.responsibleEdit) {
            alert("Informe o responsável");
            return false;
        }
        if (!_self.editPatient.institutionEdit) {
            alert("Informe a instituição");
            return false;
        }
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/patient/editModal.html',
            controller: 'patientController',
            controllerAs: 'patientCtrl',
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