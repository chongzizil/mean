/**
 * Created by Zil on 6/19/14.
 */

var Course = require('mongoose').model('Course');

exports.getCourses = function (req, res) {
	Course.find({}).exec(function (err, collection) {
		res.send(collection);
	})
};