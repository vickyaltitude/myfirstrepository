let btnSubmit = document.querySelector("#btn");

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let inputEmail = document.querySelector("#email");
  let emailValue = inputEmail.value;
  let inputPassword = document.querySelector("#password");
  let passwordValue = inputPassword.value;
  let alertElement = document.querySelector("#alert");

  if (!emailValue.trim().includes("@")) {
    alertElement.textContent = "Please enter a valid email address";
    alertElement.style.color = "red";
    return;
  }
  if (passwordValue.trim().length < 8) {
    alertElement.textContent = "Please enter minimum 8 characters";
    alertElement.style.color = "red";
    return;
  }

  alertElement.textContent = "Login successful";
  alertElement.style.color = "green";
});
