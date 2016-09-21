var appModule = angular.module('scotchApp', ['ngRoute']);

// configure our routes
appModule.config(function($routeProvider) {
	$routeProvider
	// route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/tabs', {
        	templateUrl : 'pages/tabs.html',
        	controller  : 'aboutController'
        })

        // route for the contact page
        .when('/buttons', {
            templateUrl : 'pages/buttons.html',
            controller  : 'contactController'
        })

        .otherwise('/home');
});

var mainCtrl = function($scope){
	$scope.message = 'Everyone come and see how good I look!';
}

var aboutCtrl = function($scope){
	$scope.message = 'Look! I am an about page.';
}

var contactCtrl = function($scope){
	$scope.message = 'Contact us! JK. This is just a demo.';
}


appModule.controller('mainController', mainCtrl);
appModule.controller('aboutController', aboutCtrl);
appModule.controller('contactController', contactCtrl);