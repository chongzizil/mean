/**
 * Created by Zil on 6/19/14.
 */

angular.module('app').factory('meanCachedCourses', function(meanCourse) {
	var courseList;

	return {
		query: function() {
			if(!courseList) {
				courseList = meanCourse.query();
			}

			return courseList;
		}
	}
})