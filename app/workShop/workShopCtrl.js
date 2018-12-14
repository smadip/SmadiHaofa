app.controller("workShopCtrl", function ($scope, workShopSrv, workShopRegistrationSrv) {
    $scope.selectedWorkShop = null;
    $scope.mailSent = false;

    $scope.setSelectedWorkShop = function (workShop) {
        $scope.selectedWorkShop = workShop;
    }


    workShopSrv.getWorkShopOptions().then(function (options) {
        $scope.workShops = options;
    }, function (error) {

    })

    $scope.RegisterToWorkShop = function () {
        $scope.workShopRegistration = workShopRegistrationSrv.WorkShopRegistration();
        $scope.workShopRegistration.numberOfChilds = document.getElementById('numOfChildrens').value;
        $scope.workShopRegistration.parentName = document.getElementById('fullName').value;
        $scope.workShopRegistration.parentPhone = document.getElementById('phone').value;
        $scope.workShopRegistration.parentEmail = document.getElementById('email').value;
        $scope.workShopRegistration.selectedWorkShop = $scope.selectedWorkShop;

        workShopRegistrationSrv.SendWorkShopRegistration($scope.workShopRegistration);
        $scope.mailSent = true;

    }

    $scope.backToHomePage = function () {
        window.location = "#!/";
    }

    $scope.savePdf = function () {
        var t = document.getElementById("toPdf");
        workShopSrv.createPdf(t);
    }

});