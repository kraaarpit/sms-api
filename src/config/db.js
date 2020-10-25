const { MONGODB_URL } = require('../constants');
const eventService = require('../api/services/event.service');

const mongoose = require('mongoose');

mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(async () => {
		console.log('Connected to ' + MONGODB_URL);
		if ((await eventService.get()).length === 0) {
			console.log('No Data. Data prepopulating');
			await eventService.createAll();
		}
	})
	.catch((err) => {
		console.error('App starting error:', err.message);
		process.exit(1);
	});
const db = mongoose.connection;

module.exports = db;
