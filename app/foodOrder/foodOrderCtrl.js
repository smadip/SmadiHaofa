app.controller("foodOrderCtrl", function ($scope, foodSrv) {

    // $scope.selectedFoodType = null;

    foodSrv.getFoods().then(function (options) {
        $scope.foods = options;
    }, function (error) {

    })    

    // $scope.setSelectedFoodType = function (foodType) {
    //     $scope.selectedFoodType = foodType;

    //     foodOptionSrv.getFoodOptions($scope.selectedFoodType).then(function (options) {
    //         $scope.foodOptions = options;
    //     }, function (error) {
    
    //     })
    // }

});