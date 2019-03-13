angular.module("app").controller("needsController", function ($uibModal) {

    const _self = this;
    _self.newNeeds = {};
    _self.editNeeds = {};

    _self.validateNeeds= () => {
        console.log(_self.newNeeds);
        if (!_self.newNeeds.type) {
            alert("Informe o tipo de necessidade");
            return false;
        }
        if (!_self.newNeeds.degree) {
            alert("Informe o grau de necessidade");
            return false;
        }
    }

    //validate input in modal
    _self.validateNeedsEdit = () => {
        if (!_self.editNeeds.type) {
            alert("Informe o tipo de necessidade");
            return false;
        }
        if (!_self.editNeeds.degree) {
            alert("Informe o grau de necessidade");
            return false;
        }
    }

    //open modal function
    _self.openModal = (size) => {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'View/needs/editModal.html',
            controller: 'needsController',
            controllerAs: 'needsCtrl',
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