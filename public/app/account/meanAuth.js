/**
 * Created by Zil on 6/16/14.
 */

angular.module('app').factory('meanAuth', function ($http, meanIdentity, $q, meanUser) {
	return {
		authenticateUser: function (username, password) {
			var der = $q.defer();

			$http.post('/login', {username:username, password:password}).then(function (response) {
				if(response.data.success){
					var user = new meanUser;
					angular.extend(user, response.data.user);
					meanIdentity.currentUser = user;
					der.resolve(true);
				} else {
					der.resolve(false);
				}
			});
			return der.promise;
		},
		logoutUser: function() {
			var dfd = $q.defer();
			$http.post('/logout', {logout: true}).then(function () {
				meanIdentity.currentUser = undefined;
				dfd.resolve();
			});
			return dfd.promise;
		},
		authorizeCurrentUserForRoute: function(role) {
			if(meanIdentity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('not authorized');
			}

		}
	}
});