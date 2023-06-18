// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB687xJenNtj81G9d9xr_7z_aGA0Bsqfug",
  authDomain: "church-website-7163e.firebaseapp.com",
  databaseURL: "https://church-website-7163e-default-rtdb.firebaseio.com",
  projectId: "church-website-7163e",
  storageBucket: "church-website-7163e.appspot.com",
  messagingSenderId: "364164575416",
  appId: "1:364164575416:web:a055c9493f0d9ba319444d",
  measurementId: "G-HWSBML0DG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);