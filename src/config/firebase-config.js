import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm1DpdUiKqzXuHB2wYAAKbx4jsKSjuMW0",
  authDomain: "mycontacts-1c571.firebaseapp.com",
  projectId: "mycontacts-1c571",
  storageBucket: "mycontacts-1c571.firebasestorage.app",
  messagingSenderId: "459936620078",
  appId: "1:459936620078:web:cf60a157d3a40ee6cbc9bf",
  measurementId: "G-PLZ9RLBD3K",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
