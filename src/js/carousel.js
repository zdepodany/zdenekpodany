(function () {
  document.querySelectorAll('.testimonials-carousel').forEach(function (carousel) {
    var viewport = carousel.querySelector('.testimonials-carousel-viewport');
    var slides = carousel.querySelectorAll('.testimonials-slide');
    var prevBtn = carousel.querySelector('.testimonials-carousel-btn--prev');
    var nextBtn = carousel.querySelector('.testimonials-carousel-btn--next');
    var dots = carousel.querySelectorAll('.testimonials-carousel-dot');
    var count = slides.length;
    var currentIndex = 0;
    if (!viewport || !count) return;

    function getIndex() {
      if (viewport.clientWidth <= 0) return 0;
      return Math.min(count - 1, Math.max(0, Math.round(viewport.scrollLeft / viewport.clientWidth)));
    }

    function render() {
      if (prevBtn) prevBtn.disabled = currentIndex <= 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= count - 1;
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === currentIndex);
      });
    }

    function goTo(index, animate) {
      if (animate === undefined) animate = true;
      if (viewport.clientWidth <= 0) return;
      var i = Math.max(0, Math.min(count - 1, index));
      viewport.scrollTo({ left: i * viewport.clientWidth, behavior: animate ? 'smooth' : 'auto' });
      currentIndex = i;
      render();
    }

    var raf;
    viewport.addEventListener('scroll', function () {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        currentIndex = getIndex();
        render();
      });
    }, { passive: true });

    new ResizeObserver(function () { goTo(getIndex(), false); }).observe(viewport);

    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); goTo(count - 1); }
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    render();
  });
})();
