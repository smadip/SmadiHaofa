app.controller("userWorkShopCtrl", function ($scope, userSrv, workShopSrv) {

  $scope.activeIndex = 0;

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
            ws.imgUrl = ws.images[0];
            ws.pageLink = "#!/userWorkShopDetails"
            ws.active = false;
            $scope.cards.push(ws);
          }

        });

        // for (var i=0; i<4; i++) {
        //     $scope.addSlide(i);
        //   }

      }, function (error) {

      })
    }
  }

  $scope.cardSelected = function (card) {
    workShopSrv.setSelectedUserCard(card);
  }

  $scope.getUserWorkShop();

  $scope.nextImg = function (activeIndex, propImages) {
    if (activeIndex === propImages.length - 1) {
      $scope.activeIndex = 0;
    }
    else {
      $scope.activeIndex += 1;
    }

  };

  $scope.prevImg = function (activeIndex, propImages) {
    if (activeIndex === 0) {
      $scope.activeIndex = propImages.length - 1;
    }
    else {
      $scope.activeIndex -= 1;
    }
  }

  $scope.backToHomePage = function () {
    window.location = "#!/";
  }

  $scope.backToUserWorkShop = function () {
    window.location = "#!/userWorkShop";
  }
  
});
 