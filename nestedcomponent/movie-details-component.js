(function () {
    "use strict";

    var module = angular.module("movieListApp");

    module.component("movieDetails",{
        templateUrl: "movie-details-component.html",
        $routeConfig: [
            {
                path: "/overview", component: "movieOverview", name: "Overview"
            },
            {
                path: "/cast", component: "movieCast", name: "Cast"
            },
            {
                path: "/director", component: "movieDirector", name: "Director"
            }
        ],
        controllerAs: "model",
        controller: function(){
            var model = this;

            model.$routerOnActivate = function(next, previous){
                model.id = next.params.id;
            };
        }
    });

    module.component("movieOverview",{
        template: "This is Movie Overview"
    });

    module.component("movieCast",{
        template: "This is Movie Cast"
    });
    
    module.component("movieDirector",{
        template: "This is Movie Director"
    });


} ());
