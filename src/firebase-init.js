// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7bc5-tz6k1g_vDwD-_czkF51kgpUHFxw",
    authDomain: "laptops-warehouse-af6b1.firebaseapp.com",
    projectId: "laptops-warehouse-af6b1",
    storageBucket: "laptops-warehouse-af6b1.appspot.com",
    messagingSenderId: "552999743934",
    appId: "1:552999743934:web:440418807d661cc1a849ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth