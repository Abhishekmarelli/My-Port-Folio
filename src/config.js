import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYDCrO65YXEZaYrSXEJV_APKgYyZvx5Zc",
  authDomain: "contact-report.firebaseapp.com",
  projectId: "contact-report",
  storageBucket: "contact-report.appspot.com",
  messagingSenderId: "734313282013",
  appId: "1:734313282013:web:af4d611af9d7be01945e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);