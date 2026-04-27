// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxJf8D_X-zsQFaRGm5Yh6RrL2761JT-qk",
  authDomain: "ernestol-filmz.firebaseapp.com",
  projectId: "ernestol-filmz",
  storageBucket: "ernestol-filmz.firebasestorage.app",
  messagingSenderId: "82168230295",
  appId: "1:82168230295:web:60913656ccdecf53ac94d2",
  measurementId: "G-MS50DG9B7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);