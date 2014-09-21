var Model = require('../model');
var resources = require('./resources');
var config = require('../../conf/config');

function User () {
	this.scalarFields = [
		"user_name",
		"password",
		"id"
	];
	Model.call(this);
	this.validated = false;
}

User.prototype = new Model();
User.prototype.constructor = User;

User.prototype.load = function (userName, password, callback) {
	var self = this;
	var err = null;
	var db = resources.getMysqlConnection(config.mysql);
	var query = db.query("SELECT * FROM users WHERE user_name=? AND password=SHA(?)", [userName,password], function(err,rows,fields){
		if (err) {console.log(err); throw err;}
		if (rows.length){
			for (var index in self.scalarFields) {
				self[self.scalarFields[index]] = rows[0][self.scalarFields[index]];
			}
			self.validated = true;
		} else {
			err = "We don`t have this user in our DB";
		}
		if (callback) {
			callback(err, self);
	    }
	});
};

User.prototype.isValidPassword = function(){

};

User.prototype.loadAllStories = function(callback) {
	var self = this;
	var err = null;

	if (callback) callback(err, self);
};

module.exports = new User();

