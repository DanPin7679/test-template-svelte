// @ts-nocheck
import { connectDB } from './lib/db/mongo';
import { SvelteKitAuth } from '@auth/sveltekit';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import CredentialsProvider from '@auth/core/providers/credentials';
import { signinUser } from './lib/db/controllers/userController';
//import clientPromise from './lib/db/mongo';
connectDB();
export const handle = SvelteKitAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: '' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				try {
					const userData = await signinUser(credentials.username, credentials.password);
					const user = {
						id: userData.user._id,
						name: userData.user.email,
						email: userData.user.email
					};
					console.log('in hook', userData, user);
					return user;
				} catch {
					return null;
				}
			}
		})
	]
});

//export const handle = sequence(handleAuthJS);
