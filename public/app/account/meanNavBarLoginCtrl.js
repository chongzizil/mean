 /**
 * Created by Zil on 6/16/14.
 */
angular.module('app').controller('meanNavBarLoginCtrl', function ($scope, $http, $location, meanIdentity, meanNotifier, meanAuth) {
	$scope.identity = meanIdentity;

	$scope.signin = function (username, password) {
		meanAuth.authenticateUser(username, password).then(function (success) {
			if(success) {
				meanNotifier.notify('You have successfully signed in!')
			} else {
				meanNotifier.notify('Username/Password combination incorrect!');
			}
		})
	}

	$scope.signout = function () {
		meanAuth.logoutUser().then(function () {
			$scope.username = "";
			$scope.password = "";
			meanNotifier.notify('You have successfully signed out!');
			$location.path('/');
		})
	}

});