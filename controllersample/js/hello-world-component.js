(function(){
    "use strict";

    var module = angular.module("helloApp"); 

    module.component("helloWorld",{
        //template: "Hello from Component"
        templateUrl: "controllersample/templates/hello-world-template.html",
        controllerAs: "model",
        controller: function(){
            
            var model = this;

            model.message = "Hello from component controller";
            model.changeMessage = function(){
                model.message = "New Message";
            };
        }
    });

}());
