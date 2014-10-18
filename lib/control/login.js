var config = require('../../conf/config');
var i18n = require('i18n');
var Control = require('../control');

function Login(){
   this.cl = 'Login'; 
}

Login.prototype = new Control();
Login.prototype.constructor = Login;


Login.prototype.handle = function(req, res){
	var sess = getSession(req);
	res.render('login', { 
                            title: 'Express', 
                            googleAnalytics: true, 
                            media_path: config.media.path,
                            tu: i18n.getCatalog(i18n.getLocale())
                        });
};

function getSession(req){}

module.exports = new Login();
