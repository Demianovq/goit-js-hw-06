const sizeInput = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

sizeInput.addEventListener("input", function () {
  sizeText.style.fontSize = sizeInput.value + "px";
});
