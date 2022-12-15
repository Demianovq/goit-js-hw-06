const nameInput = document.querySelector("#validation-input");
const amountOftext = Number(nameInput.getAttribute("data-length"));
console.log(amountOftext);
nameInput.addEventListener("blur", () => {
  nameInput.classList.add("invalid");
  if (nameInput.value.length === amountOftext) {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }
});
