const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
console.log(listRef);

function addMarkup(array) {
  const ingredientsEl = array.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    return itemEl;
  });
  listRef.append(...ingredientsEl);
}

addMarkup(ingredients);
