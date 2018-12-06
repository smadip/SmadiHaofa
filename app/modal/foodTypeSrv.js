app.factory("foodTypeSrv", function ($q, $http) {


    function FoodType(foodType) {
        this.id = foodType.id;
        this.name = foodType.name;  
        this.idName =foodType.idName;
    }

    function getFoodTypes() {
        var async = $q.defer();
        var foodTypes = [];

        var getFoodTypesURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/foodTypes";

        $http.get(getFoodTypesURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var foodType = new FoodType(response.data[i]);
                foodTypes.push(foodType);
            }
            async.resolve(foodTypes);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getFoodTypes: getFoodTypes,
    }
})