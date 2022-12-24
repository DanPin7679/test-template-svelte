// @ts-nocheck
import { getToken } from '@auth/core/jwt';
import { AUTH_SECRET } from '$env/static/private';

export const load = async (event) => {
	return {
		session: await event.locals.getSession()
	};
};
