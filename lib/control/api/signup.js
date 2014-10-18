var Control = require('../../control');
var config = require('../../../conf/config');
var User = require('../../model/user');

function Signup (){
}

Signup.prototype = new Control();
Signup.prototype.constructor = Signup;

Signup.prototype.handle = function(req, res){
    var sess = req.session;

    var params = req.body;
    if (!(params.login && params.password && params.rePassword == params.password)) {
        res.write(JSON.stringify({error:"Login or password is invalid", erNo:"1"}));
        res.end();
    }

    var newUser = new User();

    newUser.user_name = params.login;
    newUser.password = params.password;
    
    newUser.createNewUser(function(err,result){
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

module.exports = new Signup();
