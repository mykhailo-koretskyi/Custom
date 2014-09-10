function Model(params) {
	console.log(this);
	if (typeof this.scalarFields === "object") {
		if (Array.isArray(this.scalarFields) && this.scalarFields.length) {
			for (var index in this.scalarFields) {
				this[this.scalarFields[index]] = "";
			}
		}
	}
}

Model.prototype.model = function(){return "Model"};

module.exports = Model;
