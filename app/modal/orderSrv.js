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

    // function sendEmail(toName, messageBody){

    //     var data = {
    //         service_id: 'smadihaofamail',
    //         template_id: 'template_gwPZtv05',
    //         user_id: 'user_fyF2Chmi4cHyELTYkGTcw',
    //         template_params: {
    //             'to_name': toName,
    //             'message_html': messageBody,
    //             'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    //         }
    //     };

    //     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    //         type: 'POST',
    //         data: JSON.stringify(data),
    //         contentType: 'application/json'
    //     }).done(function() {
    //         alert('Your mail is sent!');
    //     }).fail(function(error) {
    //         alert('Oops... ' + JSON.stringify(error));
    //     });
    // }

    function sendEmail(order) {

        var orderDeails = '';
        order.foodOrder.forEach(food => {
             var temp = " שם פריט  "+food.name + "  כמות "+ food.amount +"  מחיר "+food.price;
            orderDeails += "<div style='white-space: pre-line, direction: rtl, text-align: right'>"+temp+" </div><br>";
        });
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

    return {
        setOrder: setOrder,
        getOrder: getOrder,
        Order: Order,
        sendEmail: sendEmail
    }
})