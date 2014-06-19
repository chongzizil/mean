angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {auth: function(meanAuth) {
			return meanAuth.authorizeCurrentUserForRoute('admin');
		}}
	};

	$locationProvider.html5Mode(true);
	$routeProvider
			.when('/', { templateUrl: '/partials/main/main', controller: 'meanMainCtrl'})
			.when('/admin/users', { templateUrl: '/partials/admin/user-list',
				controller: 'meanUserListCtrl', resolve: routeRoleChecks.admin
			});

});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	})
});