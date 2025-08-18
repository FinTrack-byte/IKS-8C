// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdLJq7F6r6O9XZTQTIpwdrLR0ZySLGQrY",
  authDomain: "shkl-1db60.firebaseapp.com",
  databaseURL: "https://shkl-1db60-default-rtdb.firebaseio.com",
  projectId: "shkl-1db60",
  storageBucket: "shkl-1db60.firebasestorage.app",
  messagingSenderId: "83946018492",
  appId: "1:83946018492:web:3cfa51fa2ddebee27de2b9",
  measurementId: "G-PW83MCMQYK"
};

// Init
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
