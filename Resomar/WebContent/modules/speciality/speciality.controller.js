angular.module("app").controller("specialityController", function ($uibModal) {
    const _self = this;
    _self.newSpeciality = {};
    _self.editSpeciality = {};

    //validate input in add
    _self.validateSpeciality = () => {
        if (!_self.newSpeciality.speciality) {
            alert("Informe a especilidade");
            return false;
        }
        alert("Parabéns");
        _self.newSpeciality.speciality = null;
    }

    //validate input in modal
    _self.validateSpecialityEdit = () => {
        if (!_self.editSpeciality.specialityEdit) {
            alert("Informe a especilidade");
            return false;
        }
        alert("Parabéns");
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/speciality/editModal.html',
            controller: 'specialityController',
            controllerAs: 'specialityCtrl',
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
