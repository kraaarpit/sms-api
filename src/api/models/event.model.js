const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
	{
		city: { type: String, required: true },
		start_date: { type: Date, required: true, set: toDate },
		end_date: { type: Date, required: true, set: toDate },
		price: { type: String, required: true },
		status: { type: String, required: true },
		color: { type: String, required: true },
	},
	{ timestamps: true }
);

function toDate(v) {
	return new Date(v);
}
module.exports = mongoose.model('Event', EventSchema);

// const data = {
// 	id: 1,
// 	city: 'Neftegorsk',
// 	start_date: '4/13/2013',
// 	end_date: '5/18/2013',
// 	price: '55.82',
// 	status: 'Seldom',
// 	color: '#fd4e19',
// };
