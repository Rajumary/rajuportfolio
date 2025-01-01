document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
  
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // If all fields are filled, simulate form submission
    alert(`Thank you for your message, ${name}!`);
    document.getElementById("contact-form").reset();  // Clear the form
  });