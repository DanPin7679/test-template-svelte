// @ts-nocheck
import TourModel from '../models/tourModel';

// ---------- Create Tournament ---------- //
export const createTour = async (tour) => {
	const newTour = await TourModel.create({
		name: tour.name,
		edition: tour.edition,
		location: tour.location
	});

	return JSON.stringify(tour._id);
};

// ---------- Get Tournaments ---------- //
export const getTours = async () => {
	const tours = await TourModel.find({});

	return JSON.stringify(tours);
};

// ---------- Get Tournaments ---------- //
export const getTour = async (_id) => {
	const tour = await TourModel.findOne({ _id: { _id } });
	
	return JSON.stringify(tour);
};
