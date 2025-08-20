// Firebase konfigurieren
const firebaseConfig = {
  apiKey: "AIzaSyANnB_kd111pGYAG-YkE8_4KZ6ZE3gOK44",
  authDomain: "campen-647d2.firebaseapp.com",
  databaseURL: "https://campen-647d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "campen-647d2",
  storageBucket: "campen-647d2.appspot.com",
  messagingSenderId: "985517833842",
  appId: "1:985517833842:web:f2f78370df65716fbbcceb"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Seiten wechseln
function showPage(page) {
  document.querySelectorAll('.page, #startseite').forEach(p => p.style.display = 'none');
  document.getElementById(page).style.display = 'block';
}

// Packliste Array
const packliste = [
  "2–3 Zelte",
  "6 Isomatten / Luftmatratzen",
  "6 Schlafsäcke & Kissen",
  "6 Campingstühle + 1–2 Campingtische",
  "1 Pavillon / Sonnensegel",
  "3 Taschenlampen / Stirnlampen + Batterien",
  "2–3 Powerbanks",
  "Müllbeutel (mind. 10 Stück)",
  "Erste-Hilfe-Set",
  "2 Feuerzeuge / Streichhölzer",
  "1 Set Mehrweg-Geschirr (6 Teller, 6 Schüsseln, 6 Becher, 6 Bestecksets)",
  "2–3 Schneidebretter + 2 scharfe Messer",
  "2 große Töpfe + 1 Pfanne + Grillrost",
  "2 Kühlboxen + Kühlakkus",
  "Küchenrolle (3 Rollen), Spülmittel + 2 Schwämme",
  "18 l Wasser",
  "12 l Softdrinks / Säfte",
  "24–30 Bier",
  "3 Flaschen Wein oder Sekt",
  "2 Flaschen Schnaps",
  "6 l Mischgetränke-Zutaten",
  "1 Packung Kaffee + Filter + 1 l Pflanzenmilch",
  "1 Packung Tee",
  "🥗 Veganes Essen: Haferflocken, Pflanzenmilch, Marmelade, Aufstriche, Obst, Snacks",
  "Hauptmahlzeiten: Nudeln & Sauce, Couscous-Salat, Grillen, Eintopf/Chili, Wraps",
  "Süßes: Schokolade, Kekse, Marshmallows",
  "🎲 Spiele & Unterhaltung: Karten, Brettspiele, Beerpong, Wikingerschach, Bluetooth-Box, Gitarre/Ukulele"
];

// Packliste rendern
const packlistContainer = document.getElementById("packlistContainer");

function renderList(data) {
  packlistContainer.innerHTML = "";
  const username = localStorage.getItem("username") || "Gast";

  packliste.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("list-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `item-${index}`;

    if(data && data[index] && data[index].checked) checkbox.checked = true;

    const label = document.createElement("label");
    label.htmlFor = `item-${index}`;
    label.innerText = item;
    if(checkbox.checked) label.classList.add("checked");

    checkbox.addEventListener("change", () => {
      label.classList.toggle("checked");
      firebase.database().ref(`users/${username}/items/${index}`).set({
        checked: checkbox.checked,
        text: item
      });
    });

    div.appendChild(checkbox);
    div.appendChild(label);
    packlistContainer.appendChild(div);
  });
}

// Name speichern
document.getElementById("username").addEventListener("change", () => {
  localStorage.setItem("username", document.getElementById("username").value);
  loadList();
});

// Liste laden
function loadList() {
  const username = localStorage.getItem("username") || "Gast";
  firebase.database().ref(`users/${username}/items`).on('value', snapshot => {
    renderList(snapshot.val());
  });
}

// Initial load
loadList();