var conf = require('../conf/config');
var i18n = require('i18n');

function Control() {
    this.templateObject = {};
}

Control.prototype.run = function(req, res){
    var self = this;
    var obj = self.templateArgs();

    obj.session = req.session;
    obj.googleAnalytics = conf.googleAnalytics;
    obj.media_path = conf.media.path;
    obj.tu = i18n.getCatalog(i18n.getLocale());
    
    this.handle(req,res);    
};

Control.prototype.templateArgs = function (){
    if (arguments.length && typeof arguments[0] === "object" && !Array.isArray(arguments[0])) {
        this.templateObject = arguments[0];
    } else {
        return this.templateObject;
    }
};
module.exports = Control;
