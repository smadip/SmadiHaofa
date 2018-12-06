app.controller("homeCardCtrl", function ($scope, homeCardSrv, $routeParams) {
    
    homeCardSrv.getHomeCardOptions().then(function (options) {
        $scope.homeCards = options;
    }, function(error) {
        
    })
});