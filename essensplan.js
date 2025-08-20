const tag1 = [
  "Frühstück: Haferflocken mit Pflanzenmilch, Marmelade, Obst",
  "Mittag: Nudeln mit Tomatensauce oder Pesto",
  "Abend: Grillen (vegane Würstchen, Burger, Grillgemüse, Salate)"
];

const tag2 = [
  "Frühstück: Brötchen, vegane Aufstriche, Obst, Kaffee/Tee",
  "Mittag: Couscous-Salat mit Gemüse & Hummus",
  "Abend: Wraps mit Bohnen, Salsa und frischem Gemüse / Chili"
];

function render(id, items) {
  const ul = document.getElementById(id);
  items.forEach(t => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `<span class="text">${t}</span>`;
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  render("essen-tag1", tag1);
  render("essen-tag2", tag2);
});