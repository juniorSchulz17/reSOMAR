angular.module("app").controller("specialityController", function($uibModal, $log){
    const _self = this;

    _self.validateSpeciality = () => {
        if (!_self.speciality) {
            alert("Informe a especilidade");
            return false;
        }
        alert("Parabéns");
        _self.speciality = null;
    }

    _self.open = function () {
            var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/specialty/editModal.html',
            controller: 'specialityController',
            controllerAs: 'specialityCtrl',
            size: "lg"
        });
    }
});