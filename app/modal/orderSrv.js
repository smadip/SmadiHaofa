app.factory("orderSrv", function ($q, $http) {

    var order = null;
    function Order(orderDetails) {
        this.id = orderDetails.id;
        this.fullName = orderDetails.name;
        this.phone = orderDetails.phone;
        this.email = orderDetails.email;
        this.foodOrder = food.foodOrder;
    }

    function Order() {
        this.id = 1;
        this.fullName = "";
        this.phone = "";
        this.email = "";
        this.foodOrder = [];
        return this;

    }


    function setOrder(orderDetails) {
        order = orderDetails;
    }

    function getOrder() {
        return order;
    }

    return {
        setOrder: setOrder,
        getOrder:getOrder,
        Order:Order
    }
})