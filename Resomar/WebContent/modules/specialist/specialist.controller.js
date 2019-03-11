angular.module("app").controller("specialistController", function ($uibModal) {
    const _self = this;
    _self.newSpecialist = {};
    _self.editSpecialist = {};

    _self.validateSpecialistForm = () => {
        console.log(_self.newSpecialist);
        if (!_self.newSpecialist.name) {
            alert("Informe o nome");
            return false;
        }
        if (!_self.newSpecialist.lastName) {
            alert("Informe o sobrenome");
            return false;
        }
        if (!_self.newSpecialist.email) {
            alert("Informe o email");
            return false;
        }
        if (!_self.newSpecialist.landLine) {
            alert("Informe o telefone fixo");
            return false;
        }
        if (!_self.newSpecialist.celPhone) {
            alert("Informe o celular");
            return false;
        }
        if (!_self.newSpecialist.advice) {
            alert("Informe o conselho");
            return false;
        }
        if (!_self.newSpecialist.adviceNumber) {
            alert("Informe o número do conselho");
            return false;
        }
        if (!_self.newSpecialist.speciality) {
            alert("Informe a especilidade");
            return false;
        }
    }

    _self.validateSpecialistFormEdit = () => {
        if (!_self.editSpecialist.name) {
            alert("Informe o nome");
            return false;
        }
        if (!_self.editSpecialist.lastName) {
            alert("Informe o sobrenome");
            return false;
        }
        if (!_self.editSpecialist.email) {
            alert("Informe o email");
            return false;
        }
        if (!_self.editSpecialist.landLine) {
            alert("Informe o telefone fixo");
            return false;
        }
        if (!_self.editSpecialist.celPhone) {
            alert("Informe o celular");
            return false;
        }
        if (!_self.editSpecialist.advice) {
            alert("Informe o conselho");
            return false;
        }
        if (!_self.editSpecialist.adviceNumber) {
            alert("Informe o número do conselho");
            return false;
        }
        if (!_self.editSpecialist.speciality) {
            alert("Informe a especilidade");
            return false;
        }
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

    _self.teste = () => {
        console.log(_self.icon);
    }

    //animation hide form
    _self.hideForm = () => {
        $('.specialist-form').animate({
            height: "toggle"
        }, 700, function() {
            // Animation complete.
        });
    }
});