// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM2l58URpqDoRGxl9epQ4Rgk6em6cB4lQ",
  authDomain: "sa-ecommerce-2ab17.firebaseapp.com",
  projectId: "sa-ecommerce-2ab17",
  storageBucket: "sa-ecommerce-2ab17.appspot.com",
  messagingSenderId: "172231420911",
  appId: "1:172231420911:web:21498be5310d707857241a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth)