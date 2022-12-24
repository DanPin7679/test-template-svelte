// @ts-nocheck
//import { createTour } from '../../../lib/db/tournaments';
import { createTour } from '../../../lib/db/controllers/tourController';

export let createTourObject = {
	name: '',
	edition: '',
	location: ''
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		createTourObject.name = data.get('tourname');
		createTourObject.edition = data.get('edition');
		createTourObject.location = data.get('location');
		createTour(createTourObject);
	}
};
