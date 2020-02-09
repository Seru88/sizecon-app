import 'firebase/auth';
import 'firebase/firestore'
import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAGNIex01Bc1hnKuXTMWPQ7zD-s5q8CDM0',
  authDomain: 'sizecon-app.firebaseapp.com',
  databaseURL: 'https://sizecon-app.firebaseio.com',
  projectId: 'sizecon-app',
  storageBucket: 'sizecon-app.appspot.com',
  messagingSenderId: '131991271247',
  appId: '1:131991271247:web:59f712a00312132743f73a',
});

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;