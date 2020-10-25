class Event {
	constructor(data) {
		this.city = data.city;
		this.start_date = data.start_date;
		this.end_date = data.end_date;
		this.price = data.price;
		this.status = data.status;
		this.color = data.color;
	}
}

module.exports = Event;
