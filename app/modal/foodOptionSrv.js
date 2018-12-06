app.factory("foodOptionSrv", function ($q, $http) {


    function FoodOption(foodOption) {
        this.id = foodOption.id;
        this.name = foodOption.name;
        this.description = foodOption.description;
        // this.imgUrl = foodOption.imgUrl;
        this.price = foodOption.price;
        this.foodTypeId = foodOption.foodTypeId;
    }

    function getFoodOptions(foodType) {
        var async = $q.defer();
        var foodOptions = [];

        var getFoodOptionsURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/foodOptions";

        $http.get(getFoodOptionsURL).then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].foodTypeId == foodType.id) {
                    var foodOption = new FoodOption(response.data[i]);
                    foodOptions.push(foodOption);
                }
            }
            async.resolve(foodOptions);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getFoodOptions: getFoodOptions,
    }
})