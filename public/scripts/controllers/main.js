'use strict';


  app.controller('MainCtrl', 
    function ($scope, $location, $firebaseArray, $rootScope) {
        var ref = new Firebase("https://sci-evaluation.firebaseio.com/users");  



      $scope.update = function(user) {
        // $('#purchaseModal').modal('hide');
        // $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        // var userObject = fb.$push({"First Name": user.first, "Last Name": user.last, "Email": "none"});

        // var userID = userObject.key();
        //  console.log(userID);
        // $scope.users.$add({"firstName": user.first});
        sessionStorage.setItem("First Name", user.first);
        sessionStorage.setItem("Last Name", user.last);
        // user.first = $firebase(fireRef)
      };

      $scope.updateEmail = function(user) {
        $('.modal-backdrop').remove();
        $scope.user = $firebaseArray(ref);
        var first = sessionStorage.getItem("First Name");
        var last = sessionStorage.getItem("Last Name")
        // var profile = $firebaseObject(ref);
        $scope.user.$add({"First Name": first, "Last Name": last, "Email": user.email})
      }
    
      $scope.nextView = function() {
      console.log("next view");
      $location.path('/StartEvaluation');
      $('body').addClass("hide-bg");
    };

  });
