var config = require('../../conf/config');
var User = require('../model/user');

exports.signup = function(req, res){
    var sess = getSession(req);

    var params = req.body;
    if (!(params.login && params.password && params.rePassword == params.password)) {
        res.write(JSON.stringify({error:"Login or password is invalid", erNo:"1"}));
        res.end();
    }

    var newUser = new User();

    newUser.user_name = params.login;
    newUser.password = params.password;
    
    newUser.createNewUser(function(err,result){
        console.log(err);
        console.log(result);
        var result = {};
        result.erNo = "0";
        if (err) {
            res.write(JSON.stringify(err));
        }
        else {
            res.write(JSON.stringify(result));
        }
        res.end();
    });
};

function getSession(req) {
    var sess = req.session;
    return sess;
};

