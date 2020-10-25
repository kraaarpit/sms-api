const startsWithDoubleHypen = (str) => str && str[0] === str[1] && str[0] === '-';

const read = (arg = '') => {
	if (!arg) return;

	if (!startsWithDoubleHypen(arg)) {
		arg = `--${arg}`;
	}
	const index = process.argv.findIndex((x) => x === arg);

	if (index === -1) return null; // no arguments

	//does it has next value
	if (index + 1 < process.argv.length) {
		// yes, let checks if other value is aanother arguments
		if (startsWithDoubleHypen(process.argv[index + 1])) {
			//next value is another arguments
			return true;
		}
		return process.argv[index + 1];
	}
	return null;
};

module.exports = read;
