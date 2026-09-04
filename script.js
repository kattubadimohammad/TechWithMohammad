document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (form) {
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

  // Load the portfolio headshot from the repository image file.
  const heroPhoto = document.querySelector('.hero-photo');
  if (heroPhoto) {
    heroPhoto.src = 'images/about/MK_Photo.png';
  }

  // Highlight a professional project without exposing company code or data.
  const projectsSection = document.querySelector('#projects .row');
  if (projectsSection && !document.querySelector('[data-professional-project="ecommerce"]')) {
    const professionalProject = document.createElement('div');
    professionalProject.className = 'col-12 mb-4';
    professionalProject.setAttribute('data-professional-project', 'ecommerce');
    professionalProject.innerHTML = `
      <article class="project-card">
        <div class="project-accent"></div>
        <div class="p-4 p-md-5">
          <span class="badge badge-primary mb-3">Professional Project • Internal Company Application</span>
          <h3 class="font-weight-bold">E-Commerce Commercial Performance &amp; Sales Control Center</h3>
          <p class="lead" style="font-size:1.05rem;">Built a multi-page Streamlit application delivering commercial intelligence on GMV, MRP Sales, G2N dilution leakage and Blended AOV.</p>
          <div class="row mt-4">
            <div class="col-md-4 mb-3">
              <div class="case-step"><strong>Data Engineering</strong><span>Pandas ETL pipelines to ingest, sanitize and aggregate FY25/FY26 transactional data with multi-dimensional YoY analysis.</span></div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="case-step"><strong>Commercial Analytics</strong><span>Analyzed core e-commerce KPIs including GMV, MRP Sales, G2N dilution leakage and Blended AOV.</span></div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="case-step"><strong>Reporting Automation</strong><span>Engineered an OpenPyXL reporting engine with multi-level headers, programmatic formatting and dynamic column sizing.</span></div>
            </div>
          </div>
          <p class="project-tags mt-3 mb-0">Python • Streamlit • Pandas • NumPy • OpenPyXL</p>
          <p class="text-muted small mt-3 mb-0"><strong>Portfolio note:</strong> Internal professional work — company code and data are not publicly shared.</p>
        </div>
      </article>`;
    projectsSection.insertBefore(professionalProject, projectsSection.firstElementChild);
  }

  // Add verified GitHub/live-demo links to public project cards.
  const projectLinks = {
    'Credit Card Fraud Detection': [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/kattubadimohammad/credit-card-fraud-detection',
        className: 'btn btn-outline-primary btn-sm mr-2 mb-2'
      },
      {
        label: 'Live Demo',
        url: 'https://credit-card-fraud-detection-0bm5.onrender.com/',
        className: 'btn btn-primary btn-sm mb-2'
      }
    ],
    'Resume Classification': [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/kattubadimohammad/Resume-Classification',
        className: 'btn btn-outline-primary btn-sm mr-2 mb-2'
      }
    ],
    'AI Resume Classification': [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/kattubadimohammad/Resume-Classification',
        className: 'btn btn-outline-primary btn-sm mr-2 mb-2'
      }
    ],
    'Book Recommendation System': [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/kattubadimohammad/Book-Recommendation-System',
        className: 'btn btn-outline-primary btn-sm mr-2 mb-2'
      }
    ],
    'Two-Wheeler Website Design': [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/kattubadimohammad/Two-Wheeler-Web-Design',
        className: 'btn btn-outline-primary btn-sm mr-2 mb-2'
      }
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
