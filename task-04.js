const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");
let total = 0;

const addValue = (event) => {
  event.preventDefault();
  //   let counterValue = value.textContent;
  //     value.textContent = parseInt(counterValue) - 1;
  total -= 1;
  value.textContent = total;
};

const minusValue = (event) => {
  event.preventDefault();
  //   let counterValue = value.textContent;
  //   value.textContent = counterValue + 1;
  total += 1;
  value.textContent = total;
};

decrementBtn.addEventListener("click", addValue);
incrementBtn.addEventListener("click", minusValue);
