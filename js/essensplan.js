const essensplan = [
    "Tag 1 Frühstück: Müsli mit Pflanzenmilch",
    "Tag 1 Mittagessen: Couscous mit Gemüse",
    "Tag 1 Abendessen: Vegane Burger",
    "Tag 2 Frühstück: Brötchen mit Aufstrich",
    "Tag 2 Mittagessen: Wraps mit Bohnen und Gemüse",
    "Tag 2 Abendessen: Nudeln mit Tomatensauce"
];

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("essensplan");
    essensplan.forEach(e => {
        const li = document.createElement("li");
        li.innerText = e;
        ul.appendChild(li);
    });
});