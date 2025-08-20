import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

// 1️⃣ Firebase konfigurieren
const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  databaseURL: "https://campen-647d2-default-rtdb.firebaseio.com",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb"
};

// 2️⃣ Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 3️⃣ Packliste
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

const ul = document.getElementById("packliste");

// 4️⃣ Items in Firebase speichern, falls noch nicht vorhanden
items.forEach(item => {
  const itemRef = ref(db, "packliste/" + item.replace(/\s/g, "_"));

  // Echtzeit-Daten aus Firebase beobachten
  onValue(itemRef, snapshot => {
    let li = document.getElementById(item.replace(/\s/g, "_"));
    const checked = snapshot.exists() ? snapshot.val() : false;

    if (!li) {
      li = document.createElement("li");
      li.textContent = item;
      li.id = item.replace(/\s/g, "_");

      li.addEventListener("click", () => {
        const newValue = !li.classList.contains("checked");
        set(itemRef, newValue);
      });

      ul.appendChild(li);
    }

    li.classList.toggle("checked", checked);
  });
});

