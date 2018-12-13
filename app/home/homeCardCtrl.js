app.controller("homeCardCtrl", function ($scope, homeCardSrv,userSrv, $routeParams) {
    
    homeCardSrv.getHomeCardOptions().then(function (options) {
        $scope.homeCards = options;
    }, function(error) {
        
    })

    userSrv.isRoleAllow(homeCard.role)   
});