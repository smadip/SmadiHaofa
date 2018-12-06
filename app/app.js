
var app = angular.module("smadiHaofaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCardCtrl"
        })
        .when("/order", {
            templateUrl: "app/foodOrder/foodOrder.html",
            controller: "foodOrderCtrl"
        })        
})