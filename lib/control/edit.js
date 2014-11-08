var config = require('../../conf/config');
var i18n = require('i18n');
var Control = require('../control');

function Edit(){
}

Edit.prototype = new Control();
Edit.prototype.constructor = Edit;

Edit.prototype.handle = function(req, res){
    var obj = this.templateArgs();
    obj.test = true;

	res.render('edit', obj);
};

module.exports = new Edit();
