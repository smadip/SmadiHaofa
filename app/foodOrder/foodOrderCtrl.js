app.controller("orderCtrl", function ($scope, orderSrv, foodOptionSrv) {
    $scope.foodType = null;

    orderSrv.getFoodTypes().then(function (options) {
        $scope.foodTypes = options;
    }, function (error) {

    })

    foodOptionSrv.getFoodOptions($scope.foodType).then(function (options) {
        $scope.foodOptions = options;
    }, function (error) {

    })

});