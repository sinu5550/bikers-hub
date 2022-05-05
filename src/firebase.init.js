// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfmXnyOrhUO92Qzdd9rhjFkZy-MZbAFRs",
    authDomain: "bikers-hub-71c12.firebaseapp.com",
    projectId: "bikers-hub-71c12",
    storageBucket: "bikers-hub-71c12.appspot.com",
    messagingSenderId: "440137578660",
    appId: "1:440137578660:web:c956b8e91a692f3edd0e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;