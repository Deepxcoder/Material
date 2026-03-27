import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6W59qcU9r4whBIxe_NVryAlHqSRFL8R0",
    authDomain: "project-material-1648.firebaseapp.com",
    projectId: "project-material-1648",
    storageBucket: "project-material-1648.firebasestorage.app",
    messagingSenderId: "662874727893",
    appId: "1:662874727893:web:66421f955cd33ab281c95c",
    measurementId: "G-1Y65FR4612"
};


// Simple check to avoid crash if keys are missing
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.authDomain;

let app;
let auth;
let db;
let storage;
let googleProvider;
let githubProvider;

if (isFirebaseConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    googleProvider = new GoogleAuthProvider();
    githubProvider = new GithubAuthProvider();
} else {
    console.warn("Firebase config missing. Auth features will be disabled.");
}

export { auth, db, storage, googleProvider, githubProvider, isFirebaseConfigured };
