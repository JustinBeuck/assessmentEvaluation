'use strict';


angular.module('assessmentEvaluationApp')
    .controller('ResultsCtrl', function($scope, resultsFromJson, $location) {
        var array = ["AA", "BAS", "CO", "HVAC", "MA", "MBC", "MOS", "PT", "WE", "CSS"];
        $scope.finalResult = sessionStorage.getItem("Score");
        $scope.firstName = sessionStorage.getItem("First Name");


        var finishedResults = function(i) {
            $scope.userAssessmentResult = resultsFromJson[i - 1];
            console.log($scope.userAssessmentResult.program);
            $scope.programName = $scope.userAssessmentResult.program;
            $scope.tagline = $scope.userAssessmentResult.tagline;

            findProgramContent($scope.userAssessmentResult);
        };

        var findProgramContent = function(userAssessmentResult) {
            //Outlook content
            $scope.outlookDescription = userAssessmentResult.Outlook.description;
            $scope.outlookImages = userAssessmentResult.Outlook.images;
            //SIV content
            $scope.sivDescription = userAssessmentResult.SIV.description;
            $scope.sivImages = userAssessmentResult.SIV.images;
            //Skills Badges
            $scope.sbDescription = userAssessmentResult.Skills_Badges.description;
            $scope.sbImages = userAssessmentResult.Skills_Badges.images;
            //Certifications 
            $scope.certDescription = userAssessmentResult.Certifications.description;
            $scope.certImages = userAssessmentResult.Certifications.images;
        };

        var topScore = function(finalResult) {
            console.log(finalResult);
            var finalResult = finalResult.split(',').map(Number);
            $scope.maxResult = _.max(finalResult);

            var i = finalResult.indexOf(Math.max.apply(Math, finalResult));
            console.log($scope.maxResult);
            console.log(i);
            finishedResults(i + 1);
            console.log(array[i])
            $('body').addClass(array[i]);
        }
        topScore($scope.finalResult);


    });