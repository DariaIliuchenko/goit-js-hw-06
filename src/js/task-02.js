const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainEl = document.querySelector("#ingredients");
mainEl.forEach((element) => {

  const firstEl = document.createElement("li");
  firstEl.classList.add("item");
  firstEl.textContent = element;
  mainEl.append(firstEl);
  console.log(mainEl)
  console.log(firstEl)
})
