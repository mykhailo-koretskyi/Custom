var config = require('../../conf/config');
var i18n = require('i18n');
var Control = require('../control');

function Login(){
}

Login.prototype = new Control();
Login.prototype.constructor = Login;


Login.prototype.handle = function(req, res){
    var obj = this.templateArgs();


	res.render('login', obj);
};

module.exports = new Login();
