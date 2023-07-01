// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for form submission
    var form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Perform form validation
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");
  
      if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      // Submit the form using AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "submit.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Form submitted successfully
            alert("Thank you for your message! We will get back to you soon.");
            form.reset();
          } else {
            // Error submitting the form
            alert("An error occurred while submitting the form. Please try again.");
          }
        }
      };
  
      // Prepare form data for submission
      var formData = new FormData(form);
      xhr.send(formData);
    });
  });