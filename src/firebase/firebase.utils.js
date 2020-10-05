import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebse/auth';

// Firebase config object
const firebaseConfig = {
  apiKey: 'AIzaSyCNSaFwD4vt2WjkQy0U_wQ1s-UD-HVdCAg',
  authDomain: 'clone-6e7ba.firebaseapp.com',
  databaseURL: 'https://clone-6e7ba.firebaseio.com',
  projectId: 'clone-6e7ba',
  storageBucket: 'clone-6e7ba.appspot.com',
  messagingSenderId: '343377027231',
  appId: '1:343377027231:web:d9bc2db6124a1ade6f02aa',
  measurementId: 'G-WTHLTEGB17',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
