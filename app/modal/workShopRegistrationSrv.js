app.factory("workShopRegistrationSrv", function ($q, $http) {
    function WorkShopRegistration(workShopRegistration) {
        this.numberOfChilds = workShopRegistration.numberOfChilds;
        this.parentName = workShopRegistration.parentName;
        this.parentPhone = workShopRegistration.parentPhone;
        this.parentEmail = workShopRegistration.parentEmail;
        this.selectedWorkShop = workShopRegistration.selectedWorkShop;
    }

    function WorkShopRegistration() {
        this.numberOfChilds = 0;
        this.parentName = "";
        this.parentPhone = "";
        this.parentEmail = "";
        this.selectedWorkShop = {};
        return this;
    }

    function SendWorkShopRegistration(workShopRegistration) {
        var template_params = {
            "send_to": workShopRegistration.parentEmail,
            "to_name": workShopRegistration.parentName,
            "name": workShopRegistration.selectedWorkShop.name,
            "description": workShopRegistration.selectedWorkShop.description,
            "date": workShopRegistration.selectedWorkShop.date,
            "time": "todo",
            "numOfChilds": workShopRegistration.numberOfChilds,
            "parentName": workShopRegistration.parentName,
            "parentPhoneNum": workShopRegistration.parentPhone
        }

        var service_id = "smadihaofamail";
        var template_id = "template_gwPZtv05_clone";
        emailjs.send(service_id, template_id, template_params);
    }

    return {
        WorkShopRegistration: WorkShopRegistration,
        SendWorkShopRegistration: SendWorkShopRegistration
    }

})