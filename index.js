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

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });
  ul.appendChild(li);
});