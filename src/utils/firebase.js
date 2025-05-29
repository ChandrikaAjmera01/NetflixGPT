// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1dAYecYGfbYj370tDEXGUmNVwWtWQXWs",
  authDomain: "netflixgpt-57514.firebaseapp.com",
  projectId: "netflixgpt-57514",
  storageBucket: "netflixgpt-57514.firebasestorage.app",
  messagingSenderId: "31280062741",
  appId: "1:31280062741:web:c61c4c059f64a6d7d0c91c",
  measurementId: "G-YTGW6P6WND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();