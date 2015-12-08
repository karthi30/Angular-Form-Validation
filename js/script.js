(function() {
    angular
        .module("appName", [])
        .controller("MainController", MainController);

    //MainController.$inject = ["$scope"];

    function MainController($scope) {
        $scope.message = "Hello, Michael";
    };
    
}());

//(function() {
//    angular
//        .module("myApp", [])
//        .controller("Controller", Controller);
//
//    Controller.$inject = ["$scope"];
//    
//    function Controller($scope){
//    var person = {
//         firstname: "Karthi",
//         lastname: "Balakrishnan"
//    };
//        $scope.person = person;
//};
//    
//}());

