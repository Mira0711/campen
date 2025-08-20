// Firebase SDK laden
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Deine Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.firebasestorage.app",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };