var mysql = require('mysql');
var Model = require('../model');
var config = require('../../conf/config');

function Resources (){
	Model.call(this);
}

Resources.prototype = new Model();
Resources.prototype.constructor = Resources;

Resources.prototype.getMysqlConnection = function(options) {
	return mysql.createConnection(options);
};

module.exports = new Resources();
