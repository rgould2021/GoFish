// src/firebase/firebaseConfig.tsx

// Import Firebase core and the services you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration object (make sure apiKey is protected in a real app)
const firebaseConfig = {
  apiKey: "AIzaSyC7zXE...",  // Keep this secure in production
  authDomain: "gofish-44235.firebaseapp.com",
  projectId: "gofish-44235",
  storageBucket: "gofish-44235.appspot.com",
  messagingSenderId: "262044436455",
  appId: "1:262044436455:web:16dea8441682fd80d41f42"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);     // Firestore for database
export const auth = getAuth(app);        // Auth for user management
export const storage = getStorage(app);  // Storage for media files
