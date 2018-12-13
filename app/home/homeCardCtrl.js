app.controller("homeCardCtrl", function ($scope, homeCardSrv, userSrv, $routeParams) {

    homeCardSrv.getHomeCardOptions().then(function (options) {
        $scope.homeCards = options;
    }, function (error) {

    })

    $scope.isRoleAllow = function (roleId) {
        return userSrv.isRoleAllow(roleId);
    }

});