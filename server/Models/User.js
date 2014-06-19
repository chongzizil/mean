/**
 * Created by Zil on 6/19/14.
 */

var mongoose = require('mongoose'),
		encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
	firstName: {type:String, required:'{PATH} is required!'},
	lastName: {type:String, required:'{PATH} is required!'},
	username: {
		type: String,
		required: '{PATH} is required!',
		unique: true
	},
	salt: {type:String, required:'{PATH} is required!'},
	hashed_pwd: {type:String, required:'{PATH} is required!'},
	roles: [String]
});

userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
	},
	hasRole: function (role) {
		return this.roles.indexOf(role) > -1;
	}
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function (err, collection) {
		if(collection.length === 0) {
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'zil');
			User.create({firstName: 'Zil', lastName: 'Li', username: 'zil', salt: salt, hashed_pwd: hash, roles: ["admin"]});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'nil');
			User.create({firstName: 'Lil', lastName: 'Ni', username: 'nil', salt: salt, hashed_pwd: hash, roles: []});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'bil');
			User.create({firstName: 'Eli', lastName: 'Bi', username: 'bil', salt: salt, hashed_pwd: hash});
		}
	});
}

exports.createDefaultUsers = createDefaultUsers;