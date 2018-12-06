app.controller("foodOrderCtrl", function ($scope, foodSrv) {

    // $scope.selectedFoodType = null;

    foodSrv.getFoods().then(function (options) {
        $scope.foods = options;
    }, function (error) {

    })   
    
    $scope.setOrderDetails = function(){
        for(var i=0;i<$scope.foods.length;i++){

        }
    }

    $scope.onSelected = function(){
        if($scope.isSelected)
        {
            
        }
    }

    // $scope.setSelectedFoodType = function (foodType) {
    //     $scope.selectedFoodType = foodType;

    //     foodOptionSrv.getFoodOptions($scope.selectedFoodType).then(function (options) {
    //         $scope.foodOptions = options;
    //     }, function (error) {
    
    //     })
    // }

});