/**
 * Created by Zil on 6/16/14.
 */

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/mean',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://mean:mean@ds043057.mongolab.com:43057/mean',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};