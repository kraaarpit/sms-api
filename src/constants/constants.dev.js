const whitelist = [
	'https://www.google.com',
	'localhost',
	'0.0.0.0',
	'127.0.0.1',
	'chrome-extension',
	'http://localhost:4200',
];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not Allowed by cors'));
		}
	},
};

module.exports = { corsOptions };
