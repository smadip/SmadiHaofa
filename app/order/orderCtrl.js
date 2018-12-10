app.controller("orderCtrl", function ($scope, orderSrv) {
    $scope.order = orderSrv.getOrder();

    $scope.createPdf = function () {
        var element = document.getElementById('orderId');
        var opt = {
            margin: 1,
            filename: 'myOrder.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        //var x = html2pdf(element);
        var worker = html2pdf().set(opt).from(element).toPdf().save();
        // var worker = html2pdf().from(element).toPdf().save("sdsd");
    }

    $scope.SendMail = function(){
        
        // $scope.createPdf();

        $scope.order.fullName = document.getElementById('fullName').value;
        $scope.order.phone = document.getElementById('phone').value;
        $scope.order.email = document.getElementById('email').value;
        $scope.order.remarkData = document.getElementById('remark').value;
        $scope.order.date = document.getElementById('orderDate').value;

        orderSrv.sendEmail($scope.order);
    }
});