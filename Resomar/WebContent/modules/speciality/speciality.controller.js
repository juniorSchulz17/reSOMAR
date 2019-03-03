angular.module("app").controller("specialityController", function ($uibModal, $log) {
    const _self = this;

    //validate input in add
    _self.validateSpeciality = () => {
        if (!_self.speciality) {
            alert("Informe a especilidade");
            return false;
        }
        alert("Parabéns");
        _self.speciality = null;
    }

    //validate input in modal
    _self.validateSpecialityEdit = () => {
        if (!_self.specialityEdit) {
            alert("Informe a especilidade");
            return false;
        }
        alert("Parabéns");
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/specialty/editModal.html',
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
