// Navigation
const btnStart = document.getElementById('btn-start');
const btnPackliste = document.getElementById('btn-packliste');
const btnEssen = document.getElementById('btn-essen');

const startseite = document.getElementById('startseite');
const packliste = document.getElementById('packliste');
const essen = document.getElementById('essen');

btnStart.addEventListener('click', () => showPage('startseite'));
btnPackliste.addEventListener('click', () => showPage('packliste'));
btnEssen.addEventListener('click', () => showPage('essen'));

function showPage(page) {
    startseite.classList.remove('visible');
    packliste.classList.remove('visible');
    essen.classList.remove('visible');

    document.getElementById(page).classList.add('visible');
}

// Packliste Items
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
    "12 l Softdrinks / Säfte",
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
    "1 kg Gemüse + 500 g Hummus",
    "12 Müsliriegel",
    "1 Packung Popcorn",
    "1,5 kg Nudeln",
    "3 Gläser Tomatensauce oder Pesto (vegan)",
    "500 g Couscous / Bulgur",
    "1,5 kg frisches Gemüse (Tomaten, Gurken, Paprika, Zwiebeln)",
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
    "2 Tafeln Zartbitterschokolade",
    "2 Packungen vegane Kekse",
    "1 Beutel vegane Marshmallows",
    "Kartenspiele (UNO, Pokerkarten)",
    "1–2 Brettspiele in Reisegröße",
    "Beerpong-Set (Becher + Ball)",
    "Flunkyball-Ball",
    "Wikingerschach (Kubb) oder Spikeball",
    "1 Bluetooth-Box",
    "Gitarre / Ukulele (optional)"
];

const packlisteUl = document.getElementById('packliste-items');

packlisteItems.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('span');
    label.textContent = item;

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Dein Name';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            label.classList.add('strike');
        } else {
            label.classList.remove('strike');
            nameInput.value = '';
        }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(nameInput);
    packlisteUl.appendChild(li);
});