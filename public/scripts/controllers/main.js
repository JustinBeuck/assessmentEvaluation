'use strict';

app.controller('MainCtrl',
    function($scope, $location, $firebaseArray, $rootScope) {
        var ref = new Firebase("https://sci-evaluation.firebaseio.com/users");
        $scope.campuses = [
            {name:"Austin", id: 1}, 
            {name:"Brownsville", id: 2}, 
            {name:"Corpus Christi", id: 3}, 
            {name:"Harlingen", id: 4}, 
            {name:"Pharr", id: 5}, 
            {name:"San Antonio(North Campus)", id: 6}, 
            {name:"San Antonio(South Campus)", id: 7}
            ];
        
        $scope.update = function(user) {
            $('.modal-backdrop').remove();
            sessionStorage.setItem("First Name", user.first);
            sessionStorage.setItem("Last Name", user.last);
            sessionStorage.setItem("Campus", $scope.user.campus.name);
            sessionStorage.setItem("CampusId", $scope.user.campus.id);
            console.log($scope.user.campus.id);
        };

        $scope.updateEmail = function(user) {
            $('.modal-backdrop').remove();
            $scope.user = $firebaseArray(ref);
            var first = sessionStorage.getItem("First Name");
            var last = sessionStorage.getItem("Last Name");
            var campus = sessionStorage.getItem("Campus");
            $scope.user.$add({
                "First Name": first,
                "Last Name": last,
                "Email": user.email,
                "Campus" : campus
            })
        }

        $scope.nextView = function() {
            console.log("next view");
            $location.path('/StartEvaluation');
            $('body').addClass("hide-bg");
        };



    });