angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {auth: function(meanAuth) {
			return meanAuth.authorizeCurrentUserForRoute('admin');
		}},
		user: {auth: function(meanAuth) {
			return meanAuth.authorizeAuthenticatedUserForRoute()
		}}
	};

	$locationProvider.html5Mode(true);
	$routeProvider
			.when('/', { templateUrl: '/partials/main/main', controller: 'meanMainCtrl'})
			.when('/admin/users', { templateUrl: '/partials/admin/user-list',
				controller: 'meanUserListCtrl', resolve: routeRoleChecks.admin
			})
			.when('/signup', {templateUrl: '/partials/account/signup',
			  controller: 'meanSignupCtrl'})
			.when('/profile', {templateUrl: '/partials/account/profile',
				controller: 'meanProfileCtrl', resolve: routeRoleChecks.user});
});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	})
});