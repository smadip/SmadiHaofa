app.factory("workShopSrv", function ($q, $http) {


    function WorkShop(workShop) {
        this.id = workShop.id;
        this.date = workShop.date;
        this.name = workShop.name;
        this.description = workShop.description;
        this.numberOfChilds = workShop.numberOfChilds;
        this.parentName = workShop.parentName;
        this.parentPhone = workShop.parentPhone;
        this.parentEmail = workShop.parentEmail;
        this.selectedWorkShop = workShop.selectedWorkShop;
    }

    function getWorkShopOptions() {
        var async = $q.defer();
        var workShops = [];

        var getWorkShopURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/workShops";

        $http.get(getWorkShopURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var workShop = new WorkShop(response.data[i]);
                workShops.push(workShop);
            }
            async.resolve(workShops);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getWorkShopOptions: getWorkShopOptions,
    }
})