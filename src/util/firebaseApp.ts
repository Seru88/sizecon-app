import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAhpVlIqPc0kWI04HbU3kEfqWoWtyKHQ50',
  authDomain: 'neo-post-reality-production.firebaseapp.com',
  databaseURL: 'https://neo-post-reality-production.firebaseio.com',
  projectId: 'neo-post-reality-production',
  storageBucket: 'neo-post-reality-production.appspot.com',
  messagingSenderId: '700110547611',
  appId: '1:700110547611:web:9eabd6c7221abcbc53f43e',
  measurementId: 'G-5D7VGL1H95',
});

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;
