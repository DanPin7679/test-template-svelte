// @ts-nocheck
import { signupUser } from '../../../lib/db/controllers/userController';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const user = await signupUser(data.get('email'), data.get('password'));
	}
};
