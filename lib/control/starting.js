var config = require('../../conf/config');

exports.home = function(req, res){
	var sess = getSession(req);
	res.render('index', { 
                            title: 'Express', 
                            googleAnalytics: true, 
                            media_path: config.media.path
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
