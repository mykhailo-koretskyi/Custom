exports.home = function(req, res){
	var sess = getSession(req);
	res.render('index', { title: 'Express' });
};

exports.login = function(req, res){
    var sess = getSession(req);
    res.render('login', { title: 'Express' });
};

function getSession(req) {
    var sess = req.session;
	return sess;
};
