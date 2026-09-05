(function () {
  var selectors = [
    '.section-title', '.section-subtitle', '.service-card', '.process-step',
    '.about-layout', '.comparison-table', '.comparison-cta-button',
    '.comparison-cta', '.testimonials-carousel',
    '.pricing-note', '.section-cta', '.value-compare-panel',
    '.faq-item', '.contact-form',
  ];

  var elements = document.querySelectorAll(selectors.join(', '));
  elements.forEach(function (el) {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('in-view');

      // Once the reveal transition has settled, drop the reveal classes so their
      // staggered transition-delay can no longer bleed into unrelated transitions
      // (e.g. a hover effect) that happen to share the same element later on.
      var settled = false;
      var settle = function () {
        if (settled) return;
        settled = true;
        el.classList.remove('reveal', 'in-view');
        el.removeEventListener('transitionend', settle);
      };
      el.addEventListener('transitionend', settle);
      setTimeout(settle, 1200);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
