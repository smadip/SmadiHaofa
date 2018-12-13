
var app = angular.module("smadiHaofaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCardCtrl"
        })
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "loginCtrl"
        }).when("/signup", {
    
        })
        .when("/foodOrder", {
            templateUrl: "app/foodOrder/foodOrder.html",
            controller: "foodOrderCtrl"
        })        
        .when("/order", {
            templateUrl: "app/order/order.html",
            controller: "orderCtrl"
        })
        .when("/workShop", {
            templateUrl: "app/workShop/workShop.html",
            controller: "workShopCtrl"
        })
})