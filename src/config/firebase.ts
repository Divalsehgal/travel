// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCHHPa9NhkshKK5aRF7UWM511rE4EwN1BQ",
    authDomain: "my-travel-a461e.firebaseapp.com",
    projectId: "my-travel-a461e",
    storageBucket: "my-travel-a461e.appspot.com",
    messagingSenderId: "410736125537",
    appId: "1:410736125537:web:adae17808277e8355dec20",
    measurementId: "G-8240BSWC7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { db, auth, storage };