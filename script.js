document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler for contact form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission for custom handling
  
      // Collect form data
      const formData = new FormData(this);
  
      // Display success message (this will need to be handled differently if you're using Getform)
      const successMessage = document.createElement('div');
      successMessage.classList.add('alert', 'alert-success');
      successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
      this.appendChild(successMessage);
  
      // Send form data to Getform
      fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          // Clear form fields and display success message
          this.reset();
          alert('Thank you for contacting us! We will get back to you soon.');
        } else {
          alert('There was a problem with your submission. Please try again.');
        }
      }).catch(error => {
        alert('There was an error submitting the form. Please try again later.');
      });
    });
  });
  