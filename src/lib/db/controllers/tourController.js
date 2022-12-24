// @ts-nocheck
import TourModel from '../models/tourModel';
import { editionSchema } from '../models/tourModel';

// ---------- Create Tournament ---------- //
export const createTour = async (tour) => {
	const newTour = await TourModel.create({
		name: tour.name,
		editions: [
			{
				name: tour.edition,
				location: tour.location
			}
		]
	});

	return JSON.stringify(tour._id);
};

// ---------- Get Tournaments ---------- //
export const getTours = async () => {
	const tours = await TourModel.find({});

	return JSON.stringify(tours);
};

// ---------- Get Tournament ---------- //
export const getTour = async (_id) => {
	const tour = await TourModel.findOne({ _id: { _id } });

	return JSON.stringify(tour);
};

// ---------- Add Edition ---------- //
export const addEdition = async (tourId, edition) => {
	const tour = await TourModel.findOne({ _id: tourId });

	const newEdition = { name: 'test', location: 'testCity' };
	tour.editions.push(newEdition);
	const updated = await tour.save();
};
