app.factory("orderOptionsSrv", function ($q, $http) {


    function OrderOption(orderOption) {
        this.id = orderOption.id;
        this.name = orderOption.name;
        this.description = orderOption.description;
        this.imgUrl = orderOption.imgUrl;
    }

    function getOrderOptions() {
        var async = $q.defer();
        var orderOptions = [];

        var getOrderOptionsURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/homeCards";

        $http.get(getOrderOptionsURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var orderOption = new OrderOption(response.data[i]);
                orderOptions.push(orderOption);
            }
            async.resolve(orderOptions);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getOrderOptions: getOrderOptions,
    }
})