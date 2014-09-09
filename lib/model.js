function Model(name) {
  if(arguments.length && arguments[0] instanceof Array) {
    for(var i=0; i<name.length; i++) {
        this[name[i]];
    }
  }
}

Model.prototype.model = function(){return "Model"};

module.exports = Model;
