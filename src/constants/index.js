const path = require('path');

const readArgs = require('../api/utils/read-args');

const fileName = readArgs('env') ? readArgs('env') : '.env';

require('dotenv-safe').config({
	path: path.join(`${__dirname}../../../${fileName}`),
});

const common = require('./constants.common');

const getEnvironmentSpecificConstants = (env) => {
	switch (env) {
		case 'development':
			return require('./constants.dev');
		default:
	}
};

module.exports = {
	...common,
	...getEnvironmentSpecificConstants(process.env.NODE_ENV),
};
