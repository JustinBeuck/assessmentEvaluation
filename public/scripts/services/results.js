'use strict';

angular.module('assessmentEvaluationApp')
    .service('Results', function() {
        console.log("results service");
        var Results = {};
        Results.addResults = function(array) {
            var r = [];
            for (var i = 0; i < array.length; i++) {
                r.push(eval(array[i].join('+')));
            }
            console.log("Results:", r)
        	sessionStorage.setItem("Score", r);
            return r;
        }
        return Results;

    })