var config = require('../../conf/config');
var i18n = require('i18n');
var Control = require('../control');

function Home(){
}

Home.prototype = new Control();
Home.prototype.constructor = Home;

Home.prototype.handle = function(req, res){
    var obj = this.templateArgs();


	res.render('index', obj);
};

module.exports = new Home();
