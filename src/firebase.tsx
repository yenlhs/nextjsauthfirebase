// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCl0SMHjpRXE1CGd9yuvN929AVsZtmzTZU',
	authDomain: 'nextjsauthfirebase.firebaseapp.com',
	projectId: 'nextjsauthfirebase',
	storageBucket: 'nextjsauthfirebase.appspot.com',
	messagingSenderId: '354123370158',
	appId: '1:354123370158:web:d8967726f22cb515bba73f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
