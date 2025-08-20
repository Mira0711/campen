// Firebase Konfiguration (eigene Werte einfügen)
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJECT.firebaseapp.com",
  databaseURL: "https://DEIN_PROJECT-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "DEIN_PROJECT",
  storageBucket: "DEIN_PROJECT.appspot.com",
  messagingSenderId: "DEIN_SENDER_ID",
  appId: "DEIN_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();