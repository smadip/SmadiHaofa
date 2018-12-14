app.factory("orderSrv", function ($q, $http) {

    var order = null;
    function Order(orderDetails) {
        this.id = orderDetails.id;
        this.fullName = orderDetails.name;
        this.phone = orderDetails.phone;
        this.email = orderDetails.email;
        this.remarkData = orderDetails.remarkData;
        this.date = orderDetails.date;
        this.foodOrder = food.foodOrder;        
    }

    function Order() {
        this.id = 1;
        this.fullName = "";
        this.phone = "";
        this.email = "";
        this.remarkData = "";
        this.date = "";
        this.foodOrder = [];
        return this;

    }


    function setOrder(orderDetails) {
        order = orderDetails;
    }

    function getOrder() {
        return order;
    }
  
    function sendEmail(order) {

        var orderDeails = '';
        // order.foodOrder.forEach(food => {
        //      var temp = " שם פריט  "+food.name + "  כמות "+ food.amount +"  מחיר "+food.price;
        //     orderDeails += "<div style='white-space: pre-line, direction: rtl, text-align: right'>"+temp+" </div><br>";

            orderDeails = document.getElementById("summeryFood").innerHTML;
        // });
        var template_params = {
            "send_to": order.email,
            "to_name": order.fullName,
            "phoneNum": order.phone,
            "emailAddress": order.email,
            "orderDetails": orderDeails,
            "remarkData": order.remarkData,
            "orderDate": order.date
        }
        var service_id = "smadihaofamail";
        var template_id = "template_gwPZtv05";
        emailjs.send(service_id, template_id, template_params);
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
        setOrder: setOrder,
        createPdf:createPdf,
        getOrder: getOrder,
        Order: Order,
        sendEmail: sendEmail
    }
})