const DEFAULT_ITEMS = [
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

const LIST_ID = "packliste";
const DB_KEY = "packliste";

// Hilfsfunktionen DB
const getRef = () => window.db.ref(DB_KEY);
const save = (items) => getRef().set(items);

// UI rendern
function render(items) {
  const ul = document.getElementById(LIST_ID);
  ul.innerHTML = "";

  items.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "item" + (item.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!item.completed;

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = item.text;

    const nameWrap = document.createElement("div");
    nameWrap.className = "name-wrap";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.value = item.name || "";
    nameInput.disabled = !checkbox.checked;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = checkbox.checked && item.name ? `von ${item.name}` : "frei";

    // Events
    checkbox.addEventListener("change", () => {
      items[i].completed = checkbox.checked;
      if (!checkbox.checked) {
        items[i].name = "";
        nameInput.value = "";
        nameInput.disabled = true;
      } else {
        nameInput.disabled = false;
      }
      save(items);
    });

    nameInput.addEventListener("change", () => {
      items[i].name = nameInput.value.trim();
      save(items);
    });

    nameWrap.appendChild(nameInput);
    nameWrap.appendChild(badge);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(nameWrap);
    ul.appendChild(li);
  });
}

// Daten laden (und live aktualisieren)
function init() {
  const ref = getRef();
  ref.on("value", (snap) => {
    let items = snap.val();
    if (!items) {
      items = DEFAULT_ITEMS.map(text => ({ text, completed: false, name: "" }));
      save(items);
      return; // on("value") triggert gleich erneut
    }
    render(items);
  });
}

document.addEventListener("DOMContentLoaded", init);