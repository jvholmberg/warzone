define(["app","webApi"],function(n,t){"use strict";function e(n,t){function e(){n.request("POST","brand/all").then(function t(n){console.log(n),i.brands=n.data},function e(n){console.log(n)})}console.log("BrandCtrl");var i=this;this.brands=t,this.brand={name:null,description:null},this.editMode=!1,this.create=function(){n.request("POST","brand/create",this.brand).then(function t(n){console.log(n),i.cancel()},function o(n){console.log(n)}).then(e)},this.edit=function(n){if(null!==this.brands)for(var t=0;t<this.brands.length;t++)this.brands[t]._id===n&&(this.editMode=this.brands[t]._id,this.brand=this.brands[t])},this.update=function(t){t._id=this.editMode,n.request("POST","brand/update",t).then(function o(n){console.log(n),i.cancel()},function s(n){console.log(n)}).then(e)},this["delete"]=function(t){n.request("POST","brand/delete",{_id:t}).then(function i(n){console.log(n)},function o(n){console.log(n)}).then(e)},this.cancel=function(){this.brand={name:null,description:null},this.editMode=!1}}angular.module("app").controller("BrandCtrl",e),e.$inject=["webApi","brands"]});