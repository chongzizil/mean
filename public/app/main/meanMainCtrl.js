/**
 * Created by Zil on 6/16/14.
 */
angular.module('app').controller('meanMainCtrl', function ($scope, meanCachedCourses) {
	$scope.courses = meanCachedCourses.query();
});