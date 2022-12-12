const inputList = document.querySelectorAll(".login-form>label>input");
const submitBtn = document.querySelector(".login-form>button");
const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === " " || password === "") {
    return alert("Уважаемый пользователь, необходимо заполнить все поля");
  }
  console.log(formData);
}
