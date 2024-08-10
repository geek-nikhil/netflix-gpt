// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9e4ZPkevvC4wddv4Z6YhPMK6rGpZ1f4",
  authDomain: "netflixapp-gpt.firebaseapp.com",
  projectId: "netflixapp-gpt",
  storageBucket: "netflixapp-gpt.appspot.com",
  messagingSenderId: "865456287679",
  appId: "1:865456287679:web:5302f72f31ec678f783b0a",
  measurementId: "G-9LSLM31TL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
