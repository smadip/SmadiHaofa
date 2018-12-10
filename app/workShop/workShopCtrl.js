app.controller("workShopCtrl", function ($scope, workShopSrv) {
    $scope.selectedWorkShop = null;

    $scope.setSelectedWorkShop = function(workShop){
        $scope.selectedWorkShop = workShop;
    }


    workShopSrv.getWorkShopOptions().then(function (options) {
        $scope.workShops = options;
    }, function(error) {
        
    })
});