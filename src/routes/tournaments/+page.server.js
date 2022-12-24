import { getTours } from '../../lib/db/controllers/tourController';

export const load = async function ({}) {
	const data = await getTours();

	return {
		tours: data
	};
};
