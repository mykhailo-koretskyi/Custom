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

User.prototype.save = function(callback){
    var self = this;

    var db = resources.getMysqlConnection(config.mysql);
    var query = db.query("insert into users (user_name, password) values (?,SHA(?))", [self.user_name, self.password], function(err, rows, fields){
        callback(err);
    });
};

User.prototype.isValidPassword = function(){

};

User.prototype.loadAllStories = function(callback) {
	var self = this;
	var err = null;

	if (callback) callback(err, self);
};

User.prototype.createNewUser = function(callback){
    var self = this;
    var err = null;

    self.isNameUnique(function(err, rows, fields){
        if (rows.length){
            err = {error: "This user name is not available", erNo: "1"};
            callback(err);
        }
        else {
            self.save(callback);
        }
    });
};

User.prototype.isNameUnique = function (callback) {
    var self = this;
    err = null;

    var db = resources.getMysqlConnection(config.mysql);
    var query = db.query("SELECT * FROM users WHERE user_name=?", self.user_name, callback);
};

module.exports = User;

