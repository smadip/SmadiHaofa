
var app = angular.module("smadiHaofaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCardCtrl"
        })
        .when("/foodOrder", {
            templateUrl: "app/foodOrder/foodOrder.html",
            controller: "foodOrderCtrl"
        })        
        .when("/Order", {
            templateUrl: "app/order/order.html",
            controller: "orderCtrl"
        })
})