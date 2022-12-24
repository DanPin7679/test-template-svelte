// @ts-nocheck
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const editionSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: false
	}
});

export const tourSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	editions: {
		type: [editionSchema],
		required: false
	}
});

const TourModel = mongoose.model('Tournament', tourSchema);

export default TourModel;
