(function () {
  var CONSENT_KEY = 'cookie-consent';
  var GA_ID = 'G-HVYTTEV5WY';

  function loadGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  var banner = document.getElementById('cookie-consent');
  var consent = localStorage.getItem(CONSENT_KEY);

  if (consent === 'accepted') {
    loadGA();
  } else if (!consent && banner) {
    banner.hidden = false;
  }

  if (banner) {
    var acceptBtn = banner.querySelector('.cookie-consent-accept');
    var rejectBtn = banner.querySelector('.cookie-consent-reject');

    if (acceptBtn) acceptBtn.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      loadGA();
      banner.hidden = true;
    });

    if (rejectBtn) rejectBtn.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'rejected');
      banner.hidden = true;
    });
  }
})();
