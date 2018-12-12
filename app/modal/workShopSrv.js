app.factory("workShopSrv", function ($q, $http) {


    function WorkShop(workShop) {
        this.id = workShop.id;
        this.date = workShop.date;
        this.name = workShop.name;
        this.description = workShop.description;
        
    }

    function WorkShopRegistration(workShopRegistration){
        this.numberOfChilds = workShopRegistration.numberOfChilds;
        this.parentName = workShopRegistration.parentName;
        this.parentPhone = workShopRegistration.parentPhone;
        this.parentEmail = workShopRegistration.parentEmail;
        this.selectedWorkShop = workShopRegistration.selectedWorkShop;
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