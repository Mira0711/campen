// React + Firebase App


firebase.initializeApp(firebaseConfig);
const db = firebase.database();


const defaultItems = [
{ id: 1, text: '2–3 Zelte', checked: false },
{ id: 2, text: '6 Isomatten / Luftmatratzen', checked: false },
{ id: 3, text: '6 Schlafsäcke + Kissen', checked: false },
{ id: 4, text: '6 Campingstühle', checked: false },
{ id: 5, text: '1–2 Campingtische', checked: false },
{ id: 6, text: '1 Pavillon / Sonnensegel', checked: false }
];


defaultItems.forEach(item => {
db.ref(`items/${item.id}`).once('value', snap => {
if (!snap.exists()) db.ref(`items/${item.id}`).set(item);
});
});


function App() {
const [items, setItems] = useState([]);


useEffect(() => {
db.ref('items').on('value', snapshot => {
const data = snapshot.val();
if (data) setItems(Object.values(data));
});
}, []);


const toggleItem = (id) => {
const item = items.find(i => i.id === id);
if (item) db.ref(`items/${id}`).update({ checked: !item.checked });
};


const resetList = () => {
items.forEach(item => db.ref(`items/${item.id}`).update({ checked: false }));
};


return (
React.createElement('div', { className: 'container' },
React.createElement('h1', null, '🏕 Camping Packliste & Essensplan'),
React.createElement('section', null,
React.createElement('h2', null, '✅ Packliste'),
React.createElement('ul', null, items.map(item => (
React.createElement('li', { key: item.id },
React.createElement('input', {
type: 'checkbox',
checked: item.checked,
onChange: () => toggleItem(item.id)
}), ' ', item.text
)
))),
React.createElement('button', { onClick: resetList }, 'Zurücksetzen')
),
React.createElement('section', null,
React.createElement('h2', null, '🍴 Essensplan (2 Tage, 6 Personen)'),
React.createElement('h3', null, 'Tag 1'),
React.createElement('p', null, 'Frühstück: Brötchen & Brot, Müsli, Obst, Kaffee & Tee'),
React.createElement('p', null, 'Mittag: Couscous-Salat, Snacks'),
React.createElement('p', null, 'Abendessen: Vegane Würstchen, Burger, Tofu, Folienkartoffeln'),
React.createElement('h3', null, 'Tag 2'),
React.createElement('p', null, 'Frühstück: Müsli / Haferflocken, Brot & Aufstriche, Obst, Kaffee & Tee'),
React.createElement('p', null, 'Mittag: Wraps mit Bohnen, Salat & Salsa'),
React.createElement('p', null, 'Abendessen: Veganes Chili (Bohnen, Mais, Gemüse, Tomaten)'),
)
)
);
}


ReactDOM.createRoot(root).render(React.createElement(App));