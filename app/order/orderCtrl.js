app.controller("foodOrderCtrl", function ($scope, orderSrv) {

    orderSrv.getOrder().then(function (order) {
        $scope.order = order;
    }, function (error) {

    })
});