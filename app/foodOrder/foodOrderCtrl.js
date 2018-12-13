app.controller("foodOrderCtrl", function ($scope, foodSrv,orderSrv) {

    // $scope.selectedFoodType = null;
    

    foodSrv.getFoods().then(function (options) {
        $scope.foods = options;
    }, function (error) {

    })   
    
    $scope.setOrderDetails = function(){

        var order  = orderSrv.Order();
        for(var i=0;i<$scope.foods.length;i++){
            for(var j=0;j<$scope.foods[i].foodOptions.length;j++)
            if($scope.foods[i].foodOptions[j].amount>0){
                order.foodOrder.push($scope.foods[i].foodOptions[j]);
            }
        }
        orderSrv.setOrder(order);
        window.location = "#!/order";
    }

    $scope.backToHomePage = function(){
        window.location = "#!/";
    }

    // $scope.onSelectFoodOption = function (event, foodOption) {
    //     var checkbox = event.target;

    //     if (checkbox.checked) {
    //         //Checkbox has been checked
    //         foodOption.disableAmount = "false";

    //     } else {
    //         //Checkbox has been unchecked
    //         foodOption.disableAmount = "true";

    //     }

    // }


    // $scope.setSelectedFoodType = function (foodType) {
    //     $scope.selectedFoodType = foodType;

    //     foodOptionSrv.getFoodOptions($scope.selectedFoodType).then(function (options) {
    //         $scope.foodOptions = options;
    //     }, function (error) {
    
    //     })
    // }

});