var config = require('../../conf/config');
var i18n = require('i18n');
var Control = require('../control');

function Home(){
}

Home.prototype = new Control();
Home.prototype.constructor = Home;

Home.prototype.handle = function(req, res, templateObj){
	var sess = templateObj.session;
	res.render('index', { 
                            title: 'Express', 
                            googleAnalytics: true, 
                            media_path: config.media.path,
                            tu: i18n.getCatalog(i18n.getLocale())
                        });
};

module.exports = new Home();
