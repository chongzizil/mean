/**
 * Created by Zil on 6/19/14.
 */

angular.module('app').factory('meanCourse', function ($resource) {
	var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
		update: {method:'PUT', isArray:false}
	});

	return CourseResource;
});