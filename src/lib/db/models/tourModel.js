// @ts-nocheck
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const tourSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	edition: {
		type: String,
		required: false
	},
	location: {
		type: String,
		required: false
	}
});

const TourModel = mongoose.model('Tournament', tourSchema);

export default TourModel;
