const nameInput = document.querySelector("#validation-input");
const amountOftext = nameInput.getAttribute("data-length");
nameInput.addEventListener("blur", () => {
  if (nameInput.value.length > amountOftext) {
    nameInput.classList.toggle("valid");
  } else if (nameInput.value.length < amountOftext) {
    nameInput.classList.toggle("invalid");
  }
});
