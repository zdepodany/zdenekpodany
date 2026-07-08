(function () {
  var progress = document.getElementById('nav-progress');
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var overlay = document.getElementById('mobile-overlay');

  function updateProgress() {
    if (!progress) return;
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var max = scrollHeight - clientHeight;
    var ratio = max > 0 ? Math.min(1, scrollTop / max) : 0;
    progress.style.transform = 'scaleX(' + ratio + ')';
  }

  function updateScrolled() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 56);
  }

  window.addEventListener('scroll', function () {
    updateProgress();
    updateScrolled();
  }, { passive: true });
  updateProgress();
  updateScrolled();

  if (toggle && overlay) {
    var closeTimer = null;

    function openMenu() {
      clearTimeout(closeTimer);
      overlay.style.display = 'flex';
      requestAnimationFrame(function () {
        overlay.setAttribute('data-open', 'true');
      });
      toggle.classList.add('nav-toggle--open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Zavřít menu');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      overlay.removeAttribute('data-open');
      toggle.classList.remove('nav-toggle--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Otevřít menu');
      document.body.style.overflow = '';
      closeTimer = setTimeout(function () {
        overlay.style.display = 'none';
      }, 320);
    }

    toggle.addEventListener('click', function () {
      if (overlay.getAttribute('data-open') === 'true') closeMenu();
      else openMenu();
    });

    overlay.querySelectorAll('.mobile-nav-link, .mobile-nav-cta').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && overlay.getAttribute('data-open') === 'true') closeMenu();
    });
  }
})();
