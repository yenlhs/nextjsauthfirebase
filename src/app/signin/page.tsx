'use client';
import React, { useState } from 'react';
import { UserAuth } from '@/app/context/AuthContext';

function SignInWithCredentails() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user, signInWithCredentials } = UserAuth();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await signInWithCredentials(email, password);

		console.log('submitted');
	};

	console.log(user);
	return (
		<form onSubmit={handleSubmit}>
			<input className='text-black' type='text' placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
			<input
				className='text-black'
				type='password'
				placeholder='password'
				name='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type='submit'>SignIn</button>
		</form>
	);
}

export default SignInWithCredentails;
