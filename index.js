import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb",
  databaseURL: "https://campen-647d2-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const packlisteItems = [
  "2–3 Zelte (je nach Größe)",
  "6 Isomatten / Luftmatratzen",
  "6 Schlafsäcke & Kissen",
  "6 Campingstühle + 1–2 Campingtische",
  "1 Pavillon / Sonnensegel",
  "3 Taschenlampen / Stirnlampen + Batterien",
  "2–3 Powerbanks",
  "Müllbeutel (mind. 10 Stück, verschiedene Sorten)",
  "Erste-Hilfe-Set",
  "2 Feuerzeuge / Streichhölzer",
  "1 Set Mehrweg-Geschirr (6 Teller, 6 Schüsseln, 6 Becher, 6 Bestecksets)",
  "2–3 Schneidebretter + 2 scharfe Messer",
  "2 große Töpfe + 1 Pfanne + Grillrost",
  "2 Kühlboxen + Kühlakkus",
  "Küchenrolle (3 Rollen), Spülmittel (bio) + 2 Schwämme",
  "18 l Wasser (3 l pro Person, z. B. 9 × 2 l Flaschen)",
  "12 l Softdrinks / Säfte (Mix: Cola, Apfelsaft, Schorle)",
  "24–30 Bier (0,33 l Flaschen/Dosen)",
  "3 Flaschen Wein oder Sekt",
  "2 Flaschen Schnaps (z. B. Rum + Wodka)",
  "6 l Mischgetränke-Zutaten (Tonic, Ginger Ale, Cola)",
  "1 Packung Kaffee + Filter + 1 l Hafer-/Sojamilch",
  "1 Packung Tee",
  "1,5 kg Haferflocken / Müsli",
  "3 l Pflanzenmilch (Hafer, Soja, Mandel)",
  "2 Gläser Marmelade",
  "1 Glas Erdnussbutter + 1 Glas vegane Schokocreme",
  "12 Brötchen + 2 Brote",
  "4 Packungen vegane Aufstriche",
  "2 kg Obst (Bananen, Äpfel, Beeren)",
  "4 große Chips-Tüten",
  "3 Packungen Cracker / Salzstangen",
  "500 g Nüsse + 300 g Trockenfrüchte",
  "1 kg Gemüse (Karotten, Gurken, Paprika) + 500 g Hummus",
  "12 Müsliriegel",
  "1 Packung Popcorn",
  "1,5 kg Nudeln + 3 Gläser Tomatensauce oder Pesto (vegan)",
  "500 g Couscous / Bulgur + 1,5 kg frisches Gemüse + Olivenöl, Zitrone, Gewürze",
  "12 vegane Würstchen",
  "6 vegane Burger-Patties",
  "1 kg Tofu / Seitan",
  "2 kg Grillgemüse (Paprika, Zucchini, Champignons, Maiskolben)",
  "1,5 kg Kartoffeln (für Folienkartoffeln)",
  "500 g veganer Kräuterquark / Aufstrich",
  "500 g Linsen oder 3 Dosen Kidneybohnen + 2 Dosen Mais",
  "2 Gläser Tomatenstücke",
  "1 kg Gemüse (Paprika, Zwiebeln, Karotten)",
  "12 Wraps + 2 Dosen Bohnen + 500 g Salat + 1 Glas Salsa",
  "2 Tafeln Zartbitterschokolade",
  "2 Packungen vegane Kekse",
  "1 Beutel vegane Marshmallows",
  "Kartenspiele (UNO, Pokerkarten)",
  "1–2 Brettspiele in Reisegröße",
  "Beerpong-Set (Becher + Ball)",
  "Flunkyball-Ball (z. B. Tennisball)",
  "Wikingerschach (Kubb) oder Spikeball",
  "1 Bluetooth-Box",
  "Gitarre / Ukulele (optional)"
];

const ul = document.getElementById("packliste");
const userNameInput = document.getElementById("userName");

function updateItemStatus(item, user) {
  set(ref(db, "packliste/" + item), { checked: true, name: user });
}

function renderList(status = {}) {
  ul.innerHTML = "";
  packlisteItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
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

const statusRef = ref(db, "packliste");
onValue(statusRef, (snapshot) => {
  const data = snapshot.val() || {};
  renderList(data);
});