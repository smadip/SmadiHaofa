app.factory("foodSrv", function ($q, $http) {


    function Food(food) {
        this.id = food.id;
        this.name = food.name;  
        this.idName =food.idName;
        this.foodOptions = food.foodOptions;
        this.imgUrl = food.imgUrl;  
        
        food.foodOptions.forEach(foodO => {
            foodO.amount = 0;
            
        });
    }

    function getFoods() {
        var async = $q.defer();
        var foods = [];

        var getFoodsURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/food";

        $http.get(getFoodsURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var food = new Food(response.data[i]);
                foods.push(food);
            }
            async.resolve(foods);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getFoods: getFoods,
    }
})