app.controller("foodOrderCtrl", function ($scope, foodTypeSrv, foodOptionSrv) {
    // $scope.selectedFoodType = $scope.selectedFoodType;

    foodTypeSrv.getFoodTypes().then(function (options) {
        $scope.foodTypes = options;
    }, function (error) {

    })

    foodOptionSrv.getFoodOptions($scope.selectedFoodType).then(function (options) {
        $scope.foodOptions = options;
    }, function (error) {

    })

    // $scope.setSelectedFoodType = function (foodType) {
    //     $scope.selectedFoodType = foodType;
    // }

});