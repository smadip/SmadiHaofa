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
                        ws.imgUrl = ws.images[0];
                        ws.pageLink = "#!/userWorkShopDetails"
                        ws.active = false;
                        $scope.cards.push(ws);
                    }

                });

                for (var i=0; i<4; i++) {
                    $scope.addSlide(i);
                  }
                  
            }, function (error) {

            })
        }
    }

    $scope.cardSelected = function (card) {
        workShopSrv.setSelectedUserCard(card);
    }

    $scope.getUserWorkShop();

    var slides = $scope.slides = [];
    $scope.addSlide = function(i) {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: $scope.selectedCard.images[i].imgUrl + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittens', 'Felines', 'Cuties'][slides.length % 4]
      });
    };
    
    
    $scope.getActiveSlide = function () {
      var activeSlide = slides.filter(function (s) { 
        return s.active;
      })[0];
      
      alert(slides.indexOf(activeSlide));
      
    };
  
    $scope.setActiveSlide = function (idx) {
      $scope.slides[idx].active=true;
    };
    
  });
  
  
  app.directive('carouselControls', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.goNext = function() {
          element.isolateScope().next();
        };
        scope.goPrev = function() {
          element.isolateScope().prev();
        };
        
      }
    };
  });