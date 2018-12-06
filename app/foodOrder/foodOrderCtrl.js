app.controller("foodOrderCtrl", function ($scope, foodTypeSrv, foodOptionSrv) {
    $scope.foodType = null;

    foodTypeSrv.getFoodTypes().then(function (options) {
        $scope.foodTypes = options;
    }, function (error) {

    })

    foodOptionSrv.getFoodOptions($scope.foodType).then(function (options) {
        $scope.foodOptions = options;
    }, function (error) {

    })

});