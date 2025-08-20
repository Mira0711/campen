const data = [
  {
    title: "Nudeln mit Tomatensauce",
    body: "1,5 kg Nudeln kochen. 3 Gläser Tomatensauce/Pesto erwärmen. Mit Gewürzen & frischem Gemüse servieren."
  },
  {
    title: "Couscous-Salat",
    body: "500 g Couscous mit heißem Wasser quellen lassen. 1,5 kg Gemüse, Olivenöl, Zitrone, Gewürze untermischen."
  },
  {
    title: "Wraps",
    body: "12 Wraps mit Bohnen (2 Dosen), Salat (500 g), Salsa (1 Glas) und frischem Gemüse füllen."
  },
  {
    title: "Grillen",
    body: "12 vegane Würstchen, 6 Burger-Patties, 1 kg Tofu/Seitan, 2 kg Grillgemüse grillen. Dazu Kartoffeln & Salat."
  },
  {
    title: "Eintopf / Chili",
    body: "500 g Linsen oder 3 Dosen Kidneybohnen + 2 Dosen Mais, 2 Gläser Tomatenstücke, 1 kg Gemüse – einkochen."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("rezepte");
  data.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe";
    div.innerHTML = `<h3>${r.title}</h3><p>${r.body}</p>`;
    wrap.appendChild(div);
  });
});