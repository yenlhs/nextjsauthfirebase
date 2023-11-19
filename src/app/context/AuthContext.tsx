import { useContext, createContext, useState, useEffect } from 'react';
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/firebase';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }: any) => {
	const [user, setUser] = useState(null);

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	const signUpwithCredentials = async (email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
				console.log(userCredential.user);
				setUser(userCredential.user);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const signInWithCredentials = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
				setUser(userCredential.user);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	return <AuthContext.Provider value={{ user, googleSignIn, signUpwithCredentials, signInWithCredentials, logOut }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
