const express = require('express');
const cors = require('cors');
const routes = require('../api/routes/v1');
const apiResponse = require('../api/utils/apiResponse');
const { corsOptions } = require('../constants');

//db conection
const db = require('./db');

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use('/v1', routes);

app.all('*', function (req, res) {
	return apiResponse.notFoundResponse(res, 'Page not found');
});

app.use((err, req, res) => {
	console.log('hello', err);
	if (err.name === 'UnauthorizedError') {
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});
module.exports = app;
