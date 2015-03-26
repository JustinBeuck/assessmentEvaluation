'use strict';

app.controller('MainCtrl',
    function($scope, $location, $firebaseArray, $rootScope) {
        var ref = new Firebase("https://sci-evaluation.firebaseio.com/users");

        $scope.update = function(user) {
            $('.modal-backdrop').remove();
            sessionStorage.setItem("First Name", user.first);
            sessionStorage.setItem("Last Name", user.last);
        };

        $scope.updateEmail = function(user) {
            $('.modal-backdrop').remove();
            $scope.user = $firebaseArray(ref);
            var first = sessionStorage.getItem("First Name");
            var last = sessionStorage.getItem("Last Name")
            $scope.user.$add({
                "First Name": first,
                "Last Name": last,
                "Email": user.email
            })
        }

        $scope.nextView = function() {
            console.log("next view");
            $location.path('/StartEvaluation');
            $('body').addClass("hide-bg");
        };

    });