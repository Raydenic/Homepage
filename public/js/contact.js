document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you within 24 hours.");
  this.reset();
});