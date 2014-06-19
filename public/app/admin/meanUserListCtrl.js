/**
 * Created by Zil on 6/18/14.
 */
angular.module('app').controller('meanUserListCtrl', function($scope, meanUser) {
	$scope.users = meanUser.query();
});