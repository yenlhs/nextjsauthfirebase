import Link from 'next/link';
import React from 'react';
import { UserAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

function Navbar() {
	const { user, googleSignIn, logOut } = UserAuth();
	const router = useRouter();

	const handleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='h-20 w-full border-b-2 flex items-center justify-between'>
			<ul className='flex'>
				<li className='p-2 cursor-pointer'>
					<Link href='/'>Home</Link>
				</li>
				<li className='p-2 cursor-pointer'>
					<Link href='/about'>About</Link>
				</li>
				<li className='p-2 cursor-pointer'>
					<Link href='/profile'>Profile</Link>
				</li>
			</ul>

			{!user ? (
				<ul className='flex'>
					<li className='p-2 cursor-pointer' onClick={handleSignIn}>
						Login with GoogleAuthProvider
					</li>
					<li className='p-2 cursor-pointer' onClick={handleSignIn}>
						Sign up with google
					</li>

					<li className='p-2 cursor-pointer' onClick={() => router.push('/signin')}>
						Sign in with credentials
					</li>
					<li className='p-2 cursor-pointer' onClick={() => router.push('/register')}>
						Register
					</li>
				</ul>
			) : (
				<div>
					<p>{user.displayName ? `Welcome ${user.displayName}` : `Welcome ${user.email}`}</p>
					<p onClick={handleSignOut} className='cursor-pointer'>
						Signout
					</p>
				</div>
			)}
		</div>
	);
}

export default Navbar;
