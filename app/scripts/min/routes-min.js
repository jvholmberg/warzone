define(["app","dashboardCtrl","statsCtrl","orderCtrl","inventoryCtrl","categoryCtrl","productCtrl","webApi"],function(r,e,t,s,o,n,l,a){"use strict";function c(r){r.when("/dashboard",{templateUrl:"app/views/pages/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard",css:"app/styles/css/dashboard-min.css"}).when("/stats",{templateUrl:"app/views/pages/stats.html",controller:"StatsCtrl",controllerAs:"stats",css:"app/styles/css/stats-min.css"}).when("/orders",{templateUrl:"app/views/pages/order.html",controller:"OrderCtrl",controllerAs:"order",css:"app/styles/css/order-min.css"}).when("/inventory",{templateUrl:"app/views/pages/inventory.html",controller:"InventoryCtrl",controllerAs:"inventory",css:"app/styles/css/inventory-min.css"}).when("/inventory/category",{templateUrl:"app/views/pages/inventory/category.html",controller:"CategoryCtrl",controllerAs:"category",css:"app/styles/css/inventory-min.css",resolve:{categories:function(r,e){var t=r.defer();return e.request("POST","category/all").then(function s(r){return t.resolve(r.data),r},function o(r){}),t.promise}}}).when("/inventory/product",{templateUrl:"app/views/pages/inventory/product.html",controller:"ProductCtrl",controllerAs:"product",css:"app/styles/css/inventory-min.css",resolve:{categories:function(r,e){console.log("Loading categories");var t=r.defer();return e.request("POST","category/all").then(function s(r){return t.resolve(r.data),r},function o(r){}),t.promise},products:function(r,e){console.log("Loading products");var t=r.defer();return e.request("POST","product/all").then(function s(r){return t.resolve(r.data),r},function o(r){}),t.promise}}}).otherwise({redirectTo:"/dashboard"})}angular.module("app").config(c),c.$inject=["$routeProvider"]});