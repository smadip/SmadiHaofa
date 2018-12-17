app.controller("orderCtrl", function ($scope, orderSrv, userSrv) {
    $scope.order = orderSrv.getOrder();

    $scope.setTotalAmount = function(){
        var total = 0;
        $scope.order.foodOrder.forEach(food => {
            total+=food.totalPrice;
        });
        return total;
    }

    $scope.totalAmount = $scope.setTotalAmount();
    $scope.mailSent = false;
    $scope.sendPdf = function () {
        var element = document.getElementById('orderId');
        orderSrv.createPdf(element);
    }

   


    $scope.setUserDetails = function () {
        var activeUser = userSrv.getActiveUser();
        if (activeUser != null) {
            $scope.userEmail = activeUser.email;
            $scope.fullName = activeUser.fname + " " + activeUser.lname;
            $scope.phone = activeUser.phone;           
        }
    }

    $scope.setUserDetails();

    $scope.SendMail = function () {

        $scope.order.fullName = document.getElementById('fullName').value;
        $scope.order.phone = document.getElementById('phone').value;
        $scope.order.email = document.getElementById('email').value;
        $scope.order.remarkData = document.getElementById('remark').value;
        $scope.order.date = document.getElementById('orderDate').value;

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