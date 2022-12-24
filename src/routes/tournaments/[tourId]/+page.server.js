// @ts-nocheck
import { getTour } from '../../../lib/db/controllers/tourController';

export const load = async function ({ params }) {
	const tourId = params.tourId.split('-')[0];
	const edId = params.tourId.split('-')[1];
	const data = await getTour(tourId);
	return {
		tour: data,
		edition: edId
	};
};
