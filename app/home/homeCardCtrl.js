app.controller("homeCardCtrl", function ($scope, orderOptionsSrv, $routeParams) {
    
    orderOptionsSrv.getOrderOptions().then(function (options) {
        $scope.homeCards = options;
    }, function(error) {
        
    })
});