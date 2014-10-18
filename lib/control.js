function Control() {
}

Control.prototype.run = function(req, res){
    var templateObj = {};

    templateObj.session = req.session;
    
    this.handle(req,res, templateObj);    
};

module.exports = Control;
