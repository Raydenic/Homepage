document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email-input");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      return;
    }

    // Simulate subscription success
    message.textContent = "Thank you for subscribing!";
    message.style.color = "lightgreen";

    form.reset();
  });
});