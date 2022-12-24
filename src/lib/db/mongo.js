// @ts-nocheck
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const uri =
	'mongodb+srv://DanPin:D9xt9rM0r1n@cluster0.nhhx7zr.mongodb.net/ctio-golf?retryWrites=true&w=majority';

export async function connectDB() {
	try {
		mongoose.connect(uri);
		console.log('Connected to DB with Mongoose');

		const client = new MongoClient(uri);
		const clientPromise = client.connect();
		console.log('MongoClient also connected');
		return clientPromise;
	} catch (e) {
		console.log(e);
		await mongoose.connection.close();
	}
}

// ---------- Adapter for managing Sessions with SvelteKit Auth ---------- //

//const options = {};

//if (process.env.NODE_ENV === "development") {
// In development mode, use a global variable so that the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).
//if (!global._mongoClientPromise) {
//const client = new MongoClient(uri);
//export const clientPromise = client.connect();
//} else {
// In production mode, it's best to not use a global variable.
//client = new MongoClient(uri, options)
//clientPromise = client.connect()
//}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
