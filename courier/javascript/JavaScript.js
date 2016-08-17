

var app = angular
.module("sss", ['ngRoute'])
.config(function ($routeProvider,$locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider.when("/Main", {
        templateUrl: "/Templates/Main.html"
    })
    .when("/signUp", {
        templateUrl: "/Templates/signUp.html"
    })

        .when("/signup form to rider", {
            templateUrl: "/Templates/Signup form to rider.html"
        })
        .when("/Login", {
            templateUrl: "/Templates/Login.html"
        })

    .otherwise({
        redirectTo: "/Templates//Main.html"
    });
})


.controller("Mainctrl", function ($scope, $location,$http,$timeout)

{
    
    
    
    $scope.loginview = "/Templates/Login.html";
    $scope.nav = "home";
    $scope.nav1 = "Signup";
    $scope.nav2 = "Login";
    $scope.nav3 = "users";
    $scope.message = "copyright &copy ;2016 sateesh matturi";
    

    var image = { Logo: "/images/Logo.jpg", img: "/images/MainImage.jpg" };
    $scope.image = image;



    $scope.sandy = function (url) {

        $location.path(url);

    }
    $scope.parra = 'our website name is "Courier To anywhere".The main objective of this site is to help people to send documents or any items locally or internationally through three ways such as roadway,airways and by ships.';
        
    $scope.$on("$routeChangeStart",function(event,next,current)
    {
        if(!confirm("are you you want exit from this page to "+ next.$$route.originalPath))
        {
            event.preventDefault();

        }

    })

})