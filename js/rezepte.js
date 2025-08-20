const rezepte = [
    "Vegane Burger: Brötchen, Patty, Salat, Tomate, vegane Sauce",
    "Couscous mit Gemüse: Couscous, Gemüse, Olivenöl, Gewürze",
    "Wraps: Tortilla, Bohnen, Gemüse, Salsa",
    "Nudeln mit Tomatensauce: Nudeln, Tomatensauce, Gewürze"
];

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("rezepte");
    rezepte.forEach(r => {
        const li = document.createElement("li");
        li.innerText = r;
        ul.appendChild(li);
    });
});