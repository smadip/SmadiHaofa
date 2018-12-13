
app.controller("loginCtrl", function($scope, $location, userSrv) {
    
    $scope.email = "smadiHaofa@gmail.com";
    $scope.pwd = "123";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        userSrv.login($scope.email, $scope.pwd).then(function() {
            // success login
            $location.path("/")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});