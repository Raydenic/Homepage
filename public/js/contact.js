document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  // alert("Message sent! We'll get back to you within 24 hours.");

  const formData = {
    name: document.querySelector('[name="name"]').value,
    email: document.querySelector('[name="email"]').value,
    company: document.querySelector('[name="company"]').value,
    message: document.querySelector('[name="message"]').value

  }
  // console.log(formData);

  this.reset();  //Clear up all the boxes

  const res = await fetch("/contact", { //Sending Json (converted from formData to /contact)
    method: "POST",    // We are sending data
    headers: { "Content-Type": "application/json" },  //Specifies that we are sending json data
    body: JSON.stringify(formData) // convert formData Object into Json string
  })
  // console.log("done")
  const data = await res.json();
  alert(data.message); // Show success/failure to user


});