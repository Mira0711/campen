// Firebase SDK importieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// 🔹 Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  databaseURL: "https://campen-647d2-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb"
};

// 🔹 Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔹 Packliste
const items = [
  "Zelt",
  "Schlafsack",
  "Campingkocher",
  "Taschenlampe",
  "Erste-Hilfe-Set",
  "Veganes Essen für 3 Tage",
  "Getränke",
  "Spiele (Karten, Würfel, etc.)"
];

// 🔹 UL Element auswählen
const ul = document.getElementById("packliste");

// 🔹 Items in Firebase speichern / anzeigen
items.forEach(item => {
  const key = item.replace(/\s/g, "_"); // Firebase Key
  const itemRef = ref(db, "packliste/" + key);

  // Echtzeit Listener
  onValue(itemRef, snapshot => {
    let li = document.getElementById(key);
    const checked = snapshot.exists() ? snapshot.val() : false;

    if (!li) {
      li = document.createElement("li");
      li.textContent = item;
      li.id = key;

      // Klick Event zum Abhaken
      li.addEventListener("click", () => {
        const newValue = !li.classList.contains("checked");
        set(itemRef, newValue);
      });

      ul.appendChild(li);
    }

    li.classList.toggle("checked", checked);
  });
});