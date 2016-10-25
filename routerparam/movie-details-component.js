(function () {
    "use strict";

    var module = angular.module("movieListApp");

    module.component("movieDetails",{
        templateUrl: "movie-details-component.html",
        // $canActivate: function($timeout){
        //     return $timeout(function(){
        //             return true;
        //         },2000);
        // },
        controllerAs: "model",
        controller: function(){
            var model = this;

            model.$routerOnActivate = function(next, previous){
                // console.log(next);
                model.id = next.params.id;
            };
        }
    });

} ());
