app.controller("orderCtrl", function ($scope, orderSrv) {
    $scope.order = orderSrv.getOrder();
});