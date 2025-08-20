const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  databaseURL: "https://campen-647d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb"
};

// Initialisieren (globales `firebase` kommt aus den compat-Skripten)
firebase.initializeApp(firebaseConfig);

// Globale DB-Referenz bereitstellen
window.db = firebase.database();