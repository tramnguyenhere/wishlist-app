// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBohLuyghDkfmoTX3XXta2ExnQfe_RfY8s',
  authDomain: 'wishlist-app-aaacf.firebaseapp.com',
  projectId: 'wishlist-app-aaacf',
  storageBucket: 'wishlist-app-aaacf.appspot.com',
  messagingSenderId: '22764872347',
  appId: '1:22764872347:web:522f41239342d42140dc3e',
  measurementId: 'G-F2TFTF9554',
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
