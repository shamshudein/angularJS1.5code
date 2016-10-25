(function(){
    "use strict";

    var module = angular.module("movieListApp",["ngComponentRouter"]);

    module.value("$routerRootComponent","movieApp");

    module.component("appAbout",{ 
        template: "This is about page"
    });

}());
