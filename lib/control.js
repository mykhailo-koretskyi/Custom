var conf = require('../conf/config');
var i18n = require('i18n');

function Control() {
    this.templateObject = {};
}

Control.prototype.run = function(req, res){
    var self = this;

    self.addTemplateArgs(req);

    self.handle(req,res);
};

Control.prototype.templateArgs = function (){
    if (arguments.length && typeof arguments[0] === "object" && !Array.isArray(arguments[0])) {
        this.templateObject = arguments[0];
    } else {
        return this.templateObject;
    }
};

Control.prototype.addTemplateArgs = function(req) {
    var self = this;

    var obj = self.templateArgs();
    self.parseRequest(req);

    obj.googleAnalytics = conf.googleAnalytics;
    obj.media_path = conf.media.path;
    obj.tu = i18n.getCatalog(i18n.getLocale());

    var pageType = obj.request.url.split('?')[0].split('/')[1];
    obj.pageType = pageType ? pageType : 'index';
};

Control.prototype.parseRequest = function(req) {
    var self = this;

    var templateVars = self.templateArgs();
    var request = {
        url : req.url,
        method : req.method,
        headers : req.headers,
        query : req.query,
        body : req.body,
        cookies : req.cookies,
        session : req.session,
        route : req.route,
        params : req.params
    };
    templateVars.request = request;
};

module.exports = Control;
