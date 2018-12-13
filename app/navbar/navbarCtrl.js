app.controller("navbarCtrl", function($scope, userSrv, $location) {
    
    $scope.isUserLoggedIn = function() {
        return userSrv.isLoggedIn();
    }

    $scope.isAdminUserLoggedIn = function() {
        return userSrv.isAdminLoggedIn();
    }

    $scope.logout = function() {
        userSrv.logout();
        $location.path("/");
    }

});