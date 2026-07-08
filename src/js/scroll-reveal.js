(function () {
  var selectors = [
    '.section-title', '.section-subtitle', '.service-card', '.process-step',
    '.about-layout', '.comparison-table', '.comparison-cta-button',
    '.comparison-cta', '.showcase-cta', '.testimonials-carousel',
    '.pricing-note', '.section-cta', '.value-compare-panel',
    '.faq-item', '.contact-form',
  ];

  var elements = document.querySelectorAll(selectors.join(', '));
  elements.forEach(function (el) {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
