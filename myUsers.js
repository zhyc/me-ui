 angular.module("myApp",["ngRoute"])

    .controller("myCtrl",function($scope,$location){

    })
    .config(function($routeProvider, $locationProvider) {
          $routeProvider
           .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the tabs page
        .when('/tabs', {
        	templateUrl : 'pages/tabs.html',
        	controller  : 'tabsController'
        })

        // route for the buttons page
        .when('/buttons', {
            templateUrl : 'pages/buttons.html',
            controller  : 'buttonsController'
        })
		// route for the stars page
        .when('/stars', {
            templateUrl : 'pages/stars.html',
            controller  : 'starsController'
        })
        // route for the stars page
        .when('/accordion', {
            templateUrl : 'pages/accordion.html',
            controller  : 'accordionController'
        })
        // route for the stars page
        .when('/hover', {
            templateUrl : 'pages/hover.html',
            controller  : 'hoverController'
        })
        // route for the stars page
        .when('/progress', {
            templateUrl : 'pages/progress.html',
            controller  : 'progressController'
        })
        .otherwise('/');
    });
    
