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

// Packliste Version 3
const packlisteItems = [
    "2–3 Zelte (je nach Größe)",
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
    "Küchenrolle (3 Rollen), Spülmittel (bio) + 2 Schwämme",
    "🍹 Getränke (für 2 Tage)",
    "18 l Wasser (3 l pro Person)",
    "12 l Softdrinks / Säfte",
    "24–30 Bier (0,33 l Flaschen/Dosen)",
    "3 Flaschen Wein oder Sekt",
    "2 Flaschen Schnaps",
    "6 l Mischgetränke-Zutaten",
    "1 Packung Kaffee + Filter + 1 l Pflanzenmilch",
    "1 Packung Tee",
    "🥗 Veganes Essen Frühstück (für 2 Tage)",
    "1,5 kg Haferflocken / Müsli",
    "3 l Pflanzenmilch",
    "2 Gläser Marmelade",
    "1 Glas Erdnussbutter + 1 Glas vegane Schokocreme",
    "12 Brötchen + 2 Brote",
    "4 Packungen vegane Aufstriche",
    "2 kg Obst (Bananen, Äpfel, Beeren)",
    "Snacks & Hauptmahlzeiten",
    "4 große Chips-Tüten",
    "3 Packungen Cracker / Salzstangen",
    "500 g Nüsse + 300 g Trockenfrüchte",
    "1 kg Gemüse + 500 g Hummus",
    "12 Müsliriegel",
    "1 Packung Popcorn",
    "1,5 kg Nudeln",
    "3 Gläser Tomatensauce oder Pesto (vegan)",
    "500 g Couscous / Bulgur",
    "1,5 kg frisches Gemüse",
    "Olivenöl, Zitrone, Gewürze",
    "12 vegane Würstchen",
    "6 vegane Burger-Patties",
    "1 kg Tofu / Seitan",
    "2 kg Grillgemüse",
    "1,5 kg Kartoffeln",
    "500 g veganer Kräuterquark / Aufstrich",
    "500 g Linsen oder 3 Dosen Kidneybohnen + 2 Dosen Mais",
    "2 Gläser Tomatenstücke",
    "12 Wraps",
    "2 Dosen Bohnen",
    "500 g Salat",
    "1 Glas Salsa",
    "Süßes",
    "2 Tafeln Zartbitterschokolade",
    "2 Packungen vegane Kekse",
    "1 Beutel vegane Marshmallows",
    "🎲 Spiele & Unterhaltung",
    "Kartenspiele, 1–2 Brettspiele, Beerpong-Set, Wikingerschach, Bluetooth-Box, Gitarre/Ukulele"
];

// Essensplan für 2 Tage
const essensplan = [
    "Tag 1 Frühstück: Haferflocken mit Pflanzenmilch, Marmelade, Obst",
    "Tag 1 Mittagessen: Couscous-Salat mit frischem Gemüse",
    "Tag 1 Abendessen: Gegrillte Würstchen und Gemüse",
    "Tag 2 Frühstück: Brötchen, vegane Aufstriche, Obst",
    "Tag 2 Mittagessen: Wraps mit Bohnen, Salat, Salsa",
    "Tag 2 Abendessen: Eintopf / Chili"
];

// Rezepte
const rezepte = [
    "Couscous-Salat: 500 g Couscous, 1,5 kg Gemüse, Olivenöl, Zitrone, Gewürze",
    "Wraps: 12 Wraps, 2 Dosen Bohnen, 500 g Salat, 1 Glas Salsa",
    "Gegrillte Würstchen & Gemüse: 12 vegane Würstchen, 2 kg Gemüse, 1,5 kg Kartoffeln",
    "Eintopf / Chili: 500 g Linsen, 2 Gläser Tomatenstücke, 1 kg Gemüse"
];

// Packliste laden & speichern
function savePacklist() {
    const items = Array.from(document.querySelectorAll("#packliste li")).map(li => ({
        text: li.dataset.text,
        completed: li.classList.contains("completed"),
        name: li.classList.contains("completed") ? document.getElementById

