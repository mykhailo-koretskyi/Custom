function Model(name, colum, row) {
  this.name = name;
  this.colum = colum;
  this.row = row;
}

Model.prototype.model = function(){return "Model"};

module.exports = Model;
