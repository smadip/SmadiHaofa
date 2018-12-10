app.controller("workShopCtrl", function ($scope, workShopSrv) {
    $scope.selectedWorkShop = null;
    $scope.workShops = workShopSrv.getWorkShopOptions();

    $scope.setSelectedWorkShop = function(workShop){
        $scope.selectedWorkShop = workShop;
    }
});