function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
colorBtn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
