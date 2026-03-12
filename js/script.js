/* ============================================
   Little Brains Play School - JavaScript
   ============================================
   Deployment Notes:
   1. GitHub Pages: No special config needed for JS
   2. Windows IIS: Ensure MIME type for .js is set (usually default)
   ============================================ */

// --- Mobile Navigation Toggle ---
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Scroll to Top Button ---
  var scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Admission Form WhatsApp Integration ---
  var admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var parentName = document.getElementById('parentName').value.trim();
      var childName = document.getElementById('childName').value.trim();
      var childAge = document.getElementById('childAge').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var message = document.getElementById('message').value.trim();

      // Build WhatsApp message
      var waMessage = 'Hello! I want admission information for Little Brains Play School.\n\n';
      waMessage += 'Parent Name: ' + parentName + '\n';
      waMessage += 'Child Name: ' + childName + '\n';
      waMessage += 'Child Age: ' + childAge + '\n';
      waMessage += 'Phone: ' + phone + '\n';
      if (message) {
        waMessage += 'Message: ' + message + '\n';
      }

      var waUrl = 'https://wa.me/919958447664?text=' + encodeURIComponent(waMessage);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // --- Simple Scroll Animation ---
  var animateElements = document.querySelectorAll('.program-card, .gallery-item, .testimonial-card, .contact-info-card, .video-item');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // --- Active Navigation Highlight ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
