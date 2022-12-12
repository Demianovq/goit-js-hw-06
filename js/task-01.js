// const listOfCtg = document.querySelector("#categories");
// const ctgOfAnimals = document.querySelectorAll("h2");
// const items = document.querySelectorAll("li>ul");

// const amountOfCtg = listOfCtg.children.length;
// const animalsTitle = ctgOfAnimals[0].textContent;
// const productsTitle = ctgOfAnimals[1].textContent;
// const technologiesTitle = ctgOfAnimals[2].textContent;
// const amountOfAnimals = items[0].children.length;
// const amountOfProducts = items[1].children.length;
// const amountOfTechnologies = items[2].children.length;

// console.log(`Number of categories: ${amountOfCtg}`);

// console.log(`Category: ${animalsTitle}`);

// console.log(`Elements: ${amountOfAnimals}`);

// console.log(`Category: ${productsTitle}`);

// console.log(`Elements: ${amountOfProducts}`);

// console.log(`Category: ${technologiesTitle}`);

// console.log(`Elements: ${amountOfTechnologies}`);

const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach(function (elem) {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
