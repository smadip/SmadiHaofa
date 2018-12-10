app.controller("workShopCtrl", function ($scope, workShopSrv) {
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

        $scope.selectedWorkShop
        workShopSrv.Register();
    }
});