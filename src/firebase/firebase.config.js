// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkMp_Id5xDqi0W_dlarLD6DEDVFs1X8T8",
    authDomain: "coffee-store-espresso-em-64d0b.firebaseapp.com",
    projectId: "coffee-store-espresso-em-64d0b",
    storageBucket: "coffee-store-espresso-em-64d0b.appspot.com",
    messagingSenderId: "986390310130",
    appId: "1:986390310130:web:13b4f3cffe87e4386a746b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;