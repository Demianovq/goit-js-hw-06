const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfingredients = document.querySelector("#ingredients");
const addItemForList = ingredients.map((item) => {
  const itemOfList = document.createElement("li");
  itemOfList.textContent = item;
  itemOfList.classList.add("item");
  return itemOfList;
});

listOfingredients.append(...addItemForList);
// listOfingredients.append(addItemForList);
