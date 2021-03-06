(function(){
    "use strict";

    var module = angular.module("movieListApp");

    function fetchDetails($http)
    {
        return $http.get("movies.json")
                .then(function(response){
                    return response.data;
                });
    }
    function controller($http){
        var model = this;
        model.movies =[];

        model.$onInit = function(){
            fetchDetails($http).then(function (movies){
                model.movies = movies;
            });
        };

        model.setRatingForChild = function(movie, newRating){
            movie.rating = newRating;
        };

        model.upRating = function(movie){
            if(movie.rating <5){
                movie.rating += 1;                
            }
        };

        model.downRating = function(movie){
            if(movie.rating >1){
                    movie.rating -= 1;                
                }
        };
        
        model.goTo = function(id){
            model.$router.navigate(["Details", {id: id}, "Overview"]);
        };

    }

    module.component("movieList",{        
        templateUrl: "movie-list-template.html",
        controllerAs: "model",
        controller: ['$http', controller],
        bindings: {
            $router: "<"
        }
    });

}());
