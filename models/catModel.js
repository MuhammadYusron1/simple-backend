const mongoose = require('mongoose');

// Create cat schema and export it to model
const catSchema = mongoose.Schema(
	{
		name: {required: true, type: String},
		age: {required: true, type: Number, min: 1, max: 60},
		hasOwner: {required: true, type: Boolean},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Cat', catSchema);