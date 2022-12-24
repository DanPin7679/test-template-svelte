// @ts-nocheck
import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
	return jwt.sign({ _id }, 'fg65se23nm98uh23bf56', { expiresIn: '3d' });
};

// ---------- Signup ---------- //
export const signupUser = async (email, password) => {
	if (!email || !password) {
		throw Error('All field must be filled');
	}
	if (!validator.isEmail(email)) {
		throw Error('Email is not valid');
	}
	if (!validator.isStrongPassword(password)) {
		throw Error('Password not strong enough');
	}

	const exist = await UserModel.findOne({ email });
	if (exist) {
		throw Error('Email already in use');
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	const user = await UserModel.create({ email, password: hash });

	const token = createToken(user._id);
	return token;
};

// ---------- Login ---------- //
export const signinUser = async (email, password) => {
	if (!email || !password) {
		throw Error('All field must be filled');
	}

	const user = await UserModel.findOne({ email });
	if (!user) {
		throw Error('Incorrect email... have you already signup?');
	}
	
	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error('Incorrect password!');
	}

	const token = createToken(user._id);
	return { user: user, isLogin: match, token: token };
};
