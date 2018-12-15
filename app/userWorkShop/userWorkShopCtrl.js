app.controller("userWorkShopCtrl", function ($scope, userSrv, workShopSrv) {

    $scope.userWorkShop = [];
    
    $scope.getUserWorkShop = function () {

        $scope.activeUser = userSrv.getActiveUser();
        if ($scope.activeUser != null) {

            var workShopList = activeUser.workShopList;

            var workShops = workShopSrv.getWorkShopOptions(false).then(function (options) {
                $scope.workShops = options;
            }, function (error) {

            })
            workShops.forEach(ws => {
                if (workShopList.includes(ws.id)) {
                    $scope.userWorkShop.push(ws);
                }


            });
        }
    }

    $scope.getUserWorkShop();

});