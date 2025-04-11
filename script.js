document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // Clear previous alerts
          const existingAlert = document.querySelector('.alert');
          if (existingAlert) existingAlert.remove();

          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'alert alert-success';
          successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
          form.appendChild(successMessage);

          // Reset form
          form.reset();
        } else {
          alert('There was a problem with your submission. Please try again.');
        }
      })
      .catch(() => {
        alert('There was an error submitting the form. Please try again later.');
      });
  });
});
