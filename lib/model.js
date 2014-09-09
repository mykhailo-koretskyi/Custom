function Model(params) {
	if (typeof params === "object") {
		if (params.fields && Array.isArray(param.fields) && param.fields.length) {
			for (var field in params.fields) {
				this[field] = undef;
			}
		}
	}
}

Model.prototype.model = function(){return "Model"};

module.exports = Model;
