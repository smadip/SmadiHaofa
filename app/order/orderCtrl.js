app.controller("orderCtrl", function ($scope, orderSrv) {
    $scope.order = orderSrv.getOrder();
    $scope.mailSent = false;
    $scope.sendPdf = function () {
        var element = document.getElementById('orderId');
        orderSrv.createPdf(element);
    }

    $scope.SendMail = function () {

        $scope.order.fullName = document.getElementById('fullName').value;
        $scope.order.phone = document.getElementById('phone').value;
        $scope.order.email = document.getElementById('email').value;
        $scope.order.remarkData = document.getElementById('remark').value;
        $scope.order.date = document.getElementById('orderDate').value;


        // var element = document.getElementById('orderId');        
        // orderSrv.createPdf(element);

        orderSrv.sendEmail($scope.order);
        $scope.mailSent = true;
    }

    $scope.backToFoodOrder = function () {
        window.location = "#!/foodOrder";
    }

    $scope.savePdf = function () {
        var t = document.getElementById("orderId");
        orderSrv.createPdf(t);
    }

});