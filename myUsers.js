var appModule = angular.module('scotchApp', ['ngRoute']);

// configure our routes
appModule.config(function($routeProvider) {
	$routeProvider
	// route for the home page
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
        .otherwise('/');
});

var mainCtrl = function($scope){
	$scope.message = 'Everyone come and see how good I look!';
}

appModule.controller('mainController', mainCtrl);

