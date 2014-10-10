var config = require('../../conf/config');
var i18n = require('i18n');

exports.home = function(req, res){
	var sess = getSession(req);
	res.render('index', { 
                            title: 'Express', 
                            googleAnalytics: true, 
                            media_path: config.media.path,
                            tu: i18n.getCatalog(i18n.getLocale())
                        });
};

exports.login = function(req, res){
    var sess = getSession(req);
    res.render('login', { title: 'Express' });
};

function getSession(req) {
    var sess = req.session;
	return sess;
};
