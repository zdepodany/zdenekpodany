(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!link || typeof window.gtag !== 'function') return;
    var method = link.href.indexOf('tel:') === 0 ? 'phone_click' : 'email_click';
    window.gtag('event', 'generate_lead', { method: method });
  });
})();
