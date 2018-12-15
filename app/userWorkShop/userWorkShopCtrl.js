app.controller("userWorkShopCtrl", function ($scope, userSrv, workShopSrv) {

    $scope.selectedCard = workShopSrv.getSelectedUserCard();
    $scope.cards = [];
    $scope.getUserWorkShop = function () {

        $scope.activeUser = userSrv.getActiveUser();
        if ($scope.activeUser != null) {

            var workShopList = $scope.activeUser.workShopList;

            var workShops = workShopSrv.getWorkShopOptions(false).then(function (options) {
                workShops = options;

                workShops.forEach(ws => {
                    if (workShopList.includes(ws.id)) {
                        ws.imgUrl = ws.images[1];
                        ws.pageLink = "#!/userWorkShopDetails"
                        $scope.cards.push(ws);
                    }

                });
            }, function (error) {

            })
        }
    }

    $scope.cardSelected = function (card) {
        workShopSrv.setSelectedUserCard(card);
    }

    $scope.getUserWorkShop();

});