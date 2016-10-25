(function(){
    "use strict";

    var module = angular.module("movieListApp",["ngRoute"]);

    module.config(function($routeProvider){
        $routeProvider
            .when("/list", {template: "<movie-list></movie-list>"})
            .when("/about", {template: "<app-about></app-about>"})
            .otherwise({redirectTo: "/list"});
    });

    module.component("appAbout",{ 
        template: "This is about page"
    });

}());
