import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase konfigurieren
const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb",
  databaseURL: "https://campen-647d2-default-rtdb.europe-west1.firebasedatabase.app"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const packlisteItems = [
  "Zelt",
  "Schlafsack",
  "Isomatte",
  "Campingkocher",
  "Veganer Snack 1",
  "Veganer Snack 2",
  "Wasser",
  "Lustige Spiele"
];

const ul = document.getElementById("packliste");
const userNameInput = document.getElementById("userName");

// Funktion, um Einträge in Firebase zu speichern
function updateItemStatus(item, user) {
  set(ref(db, "packliste/" + item), { checked: true, name: user });
}

// Funktion zum Rendern der Packliste
function renderList(status = {}) {
  ul.innerHTML = "";
  packlisteItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;

    // Wenn schon abgehakt
    if (status[item]?.checked) {
      li.classList.add("checked");
      li.textContent = `${item} (✔ ${status[item].name})`;
    }

    li.addEventListener("click", () => {
      const user = userNameInput.value.trim();
      if (!user) {
        alert("Bitte zuerst deinen Namen eingeben!");
        return;
      }
      updateItemStatus(item, user);
    });

    ul.appendChild(li);
  });
}

// Firebase Listener, um Änderungen live zu sehen
const statusRef = ref(db, "packliste");
onValue(statusRef, (snapshot) => {
  const data = snapshot.val() || {};
  renderList(data);
});