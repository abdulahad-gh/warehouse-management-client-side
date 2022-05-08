// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsDFXHoyQs4AWtiVnnEmW0g10jakg0E6s",
    authDomain: "laptops-warehouse-14e82.firebaseapp.com",
    projectId: "laptops-warehouse-14e82",
    storageBucket: "laptops-warehouse-14e82.appspot.com",
    messagingSenderId: "615873781732",
    appId: "1:615873781732:web:6b822b13502212df3471f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth