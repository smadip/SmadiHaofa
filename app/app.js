
var app = angular.module("smadiHaofaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCardCtrl"
        })
        .when("/order", {
            templateUrl: "app/order/order.html",
            controller: "orderCtrl"
        })        
})