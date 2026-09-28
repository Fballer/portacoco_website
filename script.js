// PortaCoCo Modern Website Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link, .btn-outline-sm');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when tapping outside of header
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Copy Email to Clipboard
  const copyBtn = document.getElementById('btn-copy-email');
  const emailLink = document.getElementById('email-link');
  const tooltip = document.getElementById('copy-tooltip');

  if (copyBtn && emailLink && tooltip) {
    copyBtn.addEventListener('click', async () => {
      const email = emailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        tooltip.textContent = 'Copied!';
        copyBtn.style.color = '#00e676';
        copyBtn.style.borderColor = '#00e676';

        setTimeout(() => {
          tooltip.textContent = 'Copy';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2500);
      } catch (err) {
        // Fallback for clipboard API
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        tooltip.textContent = 'Copied!';
        setTimeout(() => {
          tooltip.textContent = 'Copy';
        }, 2500);
      }
    });
  }
});
