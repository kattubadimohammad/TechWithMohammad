document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            const existingAlert = document.querySelector('.alert');
            if (existingAlert) existingAlert.remove();

            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
            form.appendChild(successMessage);
            form.reset();
          } else {
            alert('There was a problem with your submission. Please try again.');
          }
        })
        .catch(() => {
          alert('There was an error submitting the form. Please try again later.');
        });
    });
  }

  const heroPhoto = document.querySelector('.hero-photo');
  if (heroPhoto) heroPhoto.src = 'images/about/MK_Photo.png';

  // Strengthen the professional Flipkart experience description without exposing confidential details.
  const experienceHeading = Array.from(document.querySelectorAll('#experience h3')).find((heading) => heading.textContent.trim() === 'Flipkart');
  if (experienceHeading) {
    const card = experienceHeading.closest('.timeline-card');
    const paragraph = card && card.querySelector('p.mb-0');
    if (paragraph) {
      paragraph.textContent = 'Experience in an e-commerce operations environment, supporting data-driven workflows, commercial performance analysis, operational processes and marketplace support. This experience connects technical problem-solving with real business operations and analytics.';
    }
  }

  // Add the confidential professional Flipkart project as the featured project.
  const projectsSection = document.querySelector('#projects .row');
  if (projectsSection && !document.querySelector('[data-project="flipkart-commercial"]')) {
    const featured = document.createElement('div');
    featured.className = 'col-12 mb-4';
    featured.setAttribute('data-project', 'flipkart-commercial');
    featured.innerHTML = `
      <article class="project-card">
        <div class="project-accent"></div>
        <div class="p-4 p-md-5">
          <span class="badge badge-primary mb-3">Professional Project • Flipkart — Internal Business Application</span>
          <h3 class="font-weight-bold">E-Commerce Commercial Performance &amp; Sales Control Center</h3>
          <p class="lead" style="font-size:1.05rem;">Built a multi-page commercial intelligence application to analyze GMV, MRP Sales, G2N dilution and Blended AOV, with FY25/FY26 YoY analysis and automated Excel reporting. Developed the data-processing and reporting workflows using Python, Pandas, NumPy, Streamlit and OpenPyXL.</p>
          <p class="text-muted mb-3"><strong>Technology:</strong> Python • Streamlit • Pandas • NumPy • OpenPyXL</p>
          <p class="text-muted">Developed for internal business use. Company source code, raw transactional data and confidential business information are not publicly disclosed.</p>
          <a class="btn btn-primary mr-2 mb-2" href="case-study-ecommerce.html" aria-label="View Flipkart e-commerce project case study">View Case Study</a>
        </div>
      </article>`;
    projectsSection.insertBefore(featured, projectsSection.firstElementChild);
  }

  // Add verified GitHub/live-demo links to public project cards.
  const projectLinks = {
    'Credit Card Fraud Detection': [
      { label: 'GitHub Repository', url: 'https://github.com/kattubadimohammad/credit-card-fraud-detection', className: 'btn btn-outline-primary btn-sm mr-2 mb-2' },
      { label: 'Live Demo', url: 'https://credit-card-fraud-detection-0bm5.onrender.com/', className: 'btn btn-primary btn-sm mb-2' }
    ],
    'Resume Classification': [
      { label: 'GitHub Repository', url: 'https://github.com/kattubadimohammad/Resume-Classification', className: 'btn btn-outline-primary btn-sm mr-2 mb-2' }
    ],
    'AI Resume Classification': [
      { label: 'GitHub Repository', url: 'https://github.com/kattubadimohammad/Resume-Classification', className: 'btn btn-outline-primary btn-sm mr-2 mb-2' }
    ],
    'Book Recommendation System': [
      { label: 'GitHub Repository', url: 'https://github.com/kattubadimohammad/Book-Recommendation-System', className: 'btn btn-outline-primary btn-sm mr-2 mb-2' }
    ],
    'Two-Wheeler Website Design': [
      { label: 'GitHub Repository', url: 'https://github.com/kattubadimohammad/Two-Wheeler-Web-Design', className: 'btn btn-outline-primary btn-sm mr-2 mb-2' }
    ]
  };

  document.querySelectorAll('.project-card, .project-grid-card').forEach((card) => {
    const heading = card.querySelector('h3');
    if (!heading) return;

    const title = heading.textContent.trim();
    const links = projectLinks[title];
    if (!links || card.querySelector('.project-links')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'project-links mt-3';

    links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.className = link.className;
      anchor.textContent = link.label;
      anchor.setAttribute('aria-label', `${link.label} for ${title}`);
      wrapper.appendChild(anchor);
    });

    card.appendChild(wrapper);
  });
});
