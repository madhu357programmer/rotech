/* ===========================
   Venkateshwara AquaTech - Main JavaScript
   =========================== */

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky nav on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 80) {
    nav.style.position = 'fixed';
    nav.style.background = 'rgba(7,30,58,0.97)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    nav.style.padding = '1rem 4rem';
    nav.style.transition = 'all 0.3s ease';
  } else {
    nav.style.position = 'absolute';
    nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)';
    nav.style.backdropFilter = 'none';
    nav.style.boxShadow = 'none';
    nav.style.padding = '1.4rem 4rem';
  }
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.model-card, .svc-card, .why-pt, .ind-stat, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
