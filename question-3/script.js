const passwordInput = document.getElementById("password-input");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.innerHTML = "&#x1F440;"; // Closed-eye icon
  } else {
    passwordInput.type = "password";
    eyeIcon.innerHTML = "&#x1F441;"; // Open-eye icon
  }
});
