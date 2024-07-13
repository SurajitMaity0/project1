import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg9ptJJeuOtmIWuEQCwo1yFKMU8wCdpUk",
  authDomain: "maitytv-642f4.firebaseapp.com",
  projectId: "maitytv-642f4",
  storageBucket: "maitytv-642f4.appspot.com",
  messagingSenderId: "977348111914",
  appId: "1:977348111914:web:76cc5c61613caf8a7f1d53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
