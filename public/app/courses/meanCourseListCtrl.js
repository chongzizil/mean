/**
 * Created by Zil on 6/19/14.
 */

angular.module('app').controller('meanCourseListCtrl', function ($scope, meanCachedCourses) {
	$scope.courses = meanCachedCourses.query();

	$scope.sortOptions = [{value:"title",text: "Sort by Title"},
		{value: "published",text: "Sort by Publish Date"}];
	$scope.sortOrder = $scope.sortOptions[0].value;
});