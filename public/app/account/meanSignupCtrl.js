/**
 * Created by Zil on 6/19/14.
 */

angular.module('app').controller('meanSignupCtrl', function($scope, meanUser, meanNotifier, $location, meanAuth) {

	$scope.signup = function() {
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		};

		meanAuth.createUser(newUserData).then(function() {
			meanNotifier.notify('User account created!');
			$location.path('/');
		}, function(reason) {
			meanNotifier.error(reason);
		})
	}
});