import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcToYa6d4KhZuTMkBReHaiDgMuOmWecqQ",
  authDomain: "dummy-project-37968.firebaseapp.com",
  projectId: "dummy-project-37968",
  storageBucket: "dummy-project-37968.appspot.com", 
  messagingSenderId: "267089131275",
  appId: "1:267089131275:web:ac1d47c5702e3671d2d40e",
  measurementId: "G-6HFC70CDE0"
};

const app = firebase.initializeApp(firebaseConfig);

// Initialize auth
export const auth = firebase.auth();

// Export signInWithEmailAndPassword function
export const signInWithEmailAndPassword = firebase.auth.signInWithEmailAndPassword;

// Export GoogleAuthProvider from firebase.auth namespace
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default app;


