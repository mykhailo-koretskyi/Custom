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

Resources.prototype.populateLocals = function (req, res, next) {
    res.locals.domain = req.headers.domain;
    res.locals.protocol = req.connection.encrypted ? 'https://' : 'http://';
    res.locals.serverName = res.locals.protocol + res.locals.domain;
    res.locals.session = req.session;
    res.locals.sessionID = req.sessionID;

    next();
};

module.exports = new Resources();
