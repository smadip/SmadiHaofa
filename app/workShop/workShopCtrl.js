app.controller("workShopCtrl", function ($scope, workShopSrv, workShopRegistrationSrv,userSrv) {
    $scope.selectedWorkShop = null;
    $scope.mailSent = false;
    $scope.childArray = [];
    $scope.childArray.push({"id":1,"name":"", "age":5})    

    $scope.setSelectedWorkShop = function (workShop) {
        $scope.selectedWorkShop = workShop;
    }


    workShopSrv.getWorkShopOptions(true).then(function (options) {
        $scope.workShops = options;
    }, function (error) {

    })

    $scope.setUserDetails = function () {
        var activeUser = userSrv.getActiveUser();
        if (activeUser != null) {
            $scope.userEmail = activeUser.email;
            $scope.fullName = activeUser.fname + " " + activeUser.lname;
            $scope.phone = activeUser.phone;
        }
    }

    $scope.setUserDetails();


    $scope.addChild = function(){
        var newId = $scope.childArray[$scope.childArray.length-1].id+1;
        $scope.childArray.push({"id":newId,"name":"", "age":5})    
    }

    $scope.removeChild = function(childId){
        for(var i=0; i<$scope.childArray.length;i++)
        {
            if($scope.childArray[i].id == childId)
            $scope.childArray.splice(i,1);  
        }
    }

    $scope.RegisterToWorkShop = function () {
        $scope.workShopRegistration = workShopRegistrationSrv.WorkShopRegistration();
        $scope.workShopRegistration.parentName = document.getElementById('fullName').value;
        $scope.workShopRegistration.parentPhone = document.getElementById('phone').value;
        $scope.workShopRegistration.parentEmail = document.getElementById('email').value;
        $scope.workShopRegistration.childs = document.getElementById('childData').innerHTML;
        $scope.workShopRegistration.selectedWorkShop = $scope.selectedWorkShop;

        workShopRegistrationSrv.SendWorkShopRegistration($scope.workShopRegistration);
        $scope.mailSent = true;

    }

    $scope.backToHomePage = function () {
        window.location = "#!/";
    }

    $scope.savePdf = function () {
        var t = document.getElementById("toPdf");
        workShopSrv.createPdf(t);
    }

});