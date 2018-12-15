app.controller("homeCardCtrl", function ($scope, homeCardSrv, userSrv, $routeParams) {

    $scope.ruleId = userSrv.getUserRole();

    homeCardSrv.getHomeCardOptions($scope.ruleId).then(function (options) {
        $scope.homeCards = options;
    }, function (error) {

    })

    // $scope.isRoleAllow = function (roleId) {
    //     return userSrv.isRoleAllow(roleId);
    // }

});