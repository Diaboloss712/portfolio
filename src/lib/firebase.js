import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  deleteDoc, 
  doc, 
  serverTimestamp,
  orderBy 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged, 
  signInWithCustomToken 
} from 'firebase/auth';

/**
 * Firebase Configuration
 * Replace with your own Firebase config or use environment variables
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-auth-domain",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-storage-bucket",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// App ID for multi-tenant support
export const appId = import.meta.env.VITE_APP_ID || 'default-app-id';

/**
 * Initialize Firebase Authentication
 * Supports both anonymous and custom token auth
 */
export const initializeAuth = async (customToken = null) => {
  try {
    if (customToken) {
      await signInWithCustomToken(auth, customToken);
    } else {
      await signInAnonymously(auth);
    }
  } catch (error) {
    console.error("Firebase Auth Error:", error);
    throw error;
  }
};

/**
 * Get a reference to a collection
 * @param {string} collectionPath - Path to the collection
 * @returns {CollectionReference}
 */
export const getCollectionRef = (collectionPath) => {
  return collection(db, 'artifacts', appId, 'public', 'data', collectionPath);
};

// Export commonly used Firestore functions
export {
  collection,
  addDoc,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  onAuthStateChanged
};
