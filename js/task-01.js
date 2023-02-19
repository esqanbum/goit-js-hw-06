const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

category.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
