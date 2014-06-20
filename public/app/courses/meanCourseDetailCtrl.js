/**
 * Created by Zil on 6/19/14.
 */

angular.module('app').controller('meanCourseDetailCtrl', function($scope, meanCachedCourses, $routeParams) {
	meanCachedCourses.query().$promise.then(function(collection) {
		collection.forEach(function(course) {
			if(course._id === $routeParams.id) {
				$scope.course = course;
			}
		})
	})
});