app.controller("workShopCtrl", function ($scope, workShopSrv,workShopRegistrationSrv) {
    $scope.selectedWorkShop = null;

    $scope.setSelectedWorkShop = function(workShop){
        $scope.selectedWorkShop = workShop;
    }


    workShopSrv.getWorkShopOptions().then(function (options) {
        $scope.workShops = options;
    }, function(error) {
        
    })

    $scope.RegisterToWorkShop = function(){
        
        //ToDo: set all parameters of work shope and send email
        //add button save local PDF in order food
        //Add button back in order and workshop
        //add login - 
        //after login  show admin activation or user activation squer
        //admin add new workShop - see that the user can choose this work shop that just added
        //add for for order design cake
        //add fields to workshop: price and the start and end time

        $scope.workShopRegistration = workShopRegistrationSrv.WorkShopRegistration();
        $scope.workShopRegistration.numberOfChilds = document.getElementById('numOfChildrens').value;
        $scope.workShopRegistration.parentName = document.getElementById('fullName').value;
        $scope.workShopRegistration.parentPhone = document.getElementById('phone').value;
        $scope.workShopRegistration.parentEmail = document.getElementById('email').value;
        $scope.workShopRegistration.selectedWorkShop = $scope.selectedWorkShop;

        workShopRegistrationSrv.SendWorkShopRegistration($scope.workShopRegistration);
    }
});