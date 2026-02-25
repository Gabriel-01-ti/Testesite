// ================= IMPORTS =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

import { 
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { 
  getStorage 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";


// ================= CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyBbvAOfk3EXyQivxcc4ylHrtuWkKyXkuDw",
  authDomain: "sitebot-2c952.firebaseapp.com",
  projectId: "sitebot-2c952",
  storageBucket: "sitebot-2c952.firebasestorage.app",
  messagingSenderId: "410409250226",
  appId: "1:410409250226:web:6a89bc59b81011317348ab",
  measurementId: "G-RRR7DPL1CM"
};


// ================= INIT =================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ================= SERVICES =================
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Mantém usuário logado
setPersistence(auth, browserLocalPersistence);

// Google Provider
const provider = new GoogleAuthProvider();

// ================= EXPORTS =================
export { app, auth, db, storage, provider };
