const app = require('./config/expresss');

const { port } = require('./constants');

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
