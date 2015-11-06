angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MapController'
		})

		.when('/dash', {
			templateUrl: 'views/dash.html',
			controller: 'DashboardController'
		})

		.when('/blank', {
			templateUrl: 'views/blank.html',
			controller: 'GeekController'
		});

	$locationProvider.html5Mode(true);

}]);
