(function () {
  document.querySelectorAll('.faq-item').forEach(function (details) {
    var summary = details.querySelector('.faq-question');
    if (!summary) return;
    var closeTimer = null;

    summary.addEventListener('click', function (e) {
      e.preventDefault();
      if (closeTimer) clearTimeout(closeTimer);
      if (details.classList.contains('is-open')) {
        details.classList.remove('is-open');
        closeTimer = setTimeout(function () { details.removeAttribute('open'); }, 450);
      } else {
        details.setAttribute('open', '');
        void details.offsetHeight;
        details.classList.add('is-open');
      }
    });
  });
})();
