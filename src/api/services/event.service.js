const Event = require('../models/event.model');
const EventData = require('../data/event');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

class EventService {
	async get(sortBy = 'createdAt', orderBy = 'desc') {
		let order = orderBy === 'desc' ? -1 : 1;
		let result = await Event.find()
			.sort({ [sortBy]: order })
			.exec();
		return result;
	}

	async getByDateRange(start_date, end_Date) {
		let result = await Event.find({
			start_date: {
				$gte: new Date(start_date),
			},
			end_Date: {
				$lte: new Date(end_Date),
			},
		}).exec();

		return result;
	}

	async getById(id) {
		let result = await Event.findById(id).exec();
		return result;
	}

	async create(data) {
		try {
			const eventData = new EventData(data);
			const event = new Event(eventData);
			return await event.save();
		} catch (e) {
			return new Error();
		}
	}
	async update(id, data) {
		const eventData = new EventData(data);

		let result = await Event.updateOne(
			{ _id: id },
			{
				$set: eventData,
			}
		).exec();
		return result;
	}

	async delete(id) {
		console.log(id);
		let result = await Event.findOneAndDelete({ _id: id }).exec();
		return result;
	}
	async createAll() {
		const pathToMock = path.join(`${__dirname}/../../assets/data.json`);
		console.log('Mock Path', path.join(`${__dirname}/../assets/data.json`));
		let rawData = fs.readFileSync(pathToMock);

		let events = JSON.parse(rawData);

		return await Event.insertMany(events);
	}
}

module.exports = new EventService();
