// @ts-nocheck
//import { createTour } from '../../../lib/db/tournaments';
import { addEdition } from '../../../../lib/db/controllers/tourController';

let createTourObject = {
	edition: '',
	location: ''
};

export const actions = {
	default: async ({ request, params }) => {
		console.log('params', params);
		const data = await request.formData();
		createTourObject.edition = data.get('edition');
		createTourObject.location = data.get('location');
		addEdition(params.tourId);
	}
};
