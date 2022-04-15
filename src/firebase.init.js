import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPLyQPXEe4nk3ht9lZj5xyGhsQrKMND0w",
    authDomain: "red-onion-60cb7.firebaseapp.com",
    projectId: "red-onion-60cb7",
    storageBucket: "red-onion-60cb7.appspot.com",
    messagingSenderId: "872051515057",
    appId: "1:872051515057:web:45a0d1c1ec264d77ee0c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;