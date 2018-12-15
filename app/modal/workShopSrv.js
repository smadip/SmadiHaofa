app.factory("workShopSrv", function ($q, $http) {


    function WorkShop(workShop) {
        this.id = workShop.id;
        this.date = workShop.date;
        this.name = workShop.name;
        this.description = workShop.description;
        
    }   

    function getWorkShopOptions() {
        var async = $q.defer();
        var workShops = [];

        var getWorkShopURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/workShops?active=true";

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

    function createPdf (orderElement) {
        var opt = {
            margin: 1,
            filename: 'myOrder.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        //var x = html2pdf(element);
        var worker = html2pdf().set(opt).from(orderElement).toPdf().save();
        // var worker = html2pdf().from(element).toPdf().save("sdsd");
    }

    return {
        getWorkShopOptions: getWorkShopOptions,
        createPdf:createPdf
    }
})