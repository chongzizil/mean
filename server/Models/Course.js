/**
 * Created by Zil on 6/19/14.
 */
var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required:'{PATH} is required!'},
	featured: {type:Boolean, required:'{PATH} is required!'},
	published: {type:Date, required:'{PATH} is required!'},
	tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function (err, collection) {
		if(collection.length === 0) {
			Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
			Course.create({title: 'JAVA for Sociopaths', featured: true, published: new Date('10/6/2013'), tags: ['JAVA']});
			Course.create({title: 'Javascript for Sociopaths', featured: false, published: new Date('10/7/2013'), tags: ['Javascript']});
			Course.create({title: 'RUBY for Sociopaths', featured: false, published: new Date('10/8/2013'), tags: ['RUBY']});
			Course.create({title: 'AngularJS for Sociopaths', featured: true, published: new Date('10/5/2014'), tags: ['AngularJS', 'Javascript']});
			Course.create({title: 'Bootstrap for Sociopaths', featured: true, published: new Date('10/5/2014'), tags: ['Bootstrap', 'html', 'Javascript', 'css']});
			Course.create({title: 'Python for Sociopaths', featured: false, published: new Date('10/5/2014'), tags: ['Python']});
			Course.create({title: 'Node.js for Sociopaths', featured: false, published: new Date('11/5/2013'), tags: ['node.js', 'javascript']});
		}
	})
}

exports.createDefaultCourses = createDefaultCourses;