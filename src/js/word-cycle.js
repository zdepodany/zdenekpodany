// Cycles the text of [data-word-cycle] elements through a comma-separated
// word list (data-words), swapping words on a timer with a fade/slide animation.
(function () {
  var els = document.querySelectorAll('[data-word-cycle]');
  if (!els.length) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  els.forEach(function (el) {
    var words = (el.getAttribute('data-words') || '').split(',').map(function (w) { return w.trim(); }).filter(Boolean);
    if (words.length < 2) return;

    var interval = parseInt(el.getAttribute('data-interval'), 10) || 2400;
    var index = 0;

    el.textContent = words[0];

    if (prefersReducedMotion) {
      setInterval(function () {
        index = (index + 1) % words.length;
        el.textContent = words[index];
      }, interval);
      return;
    }

    // Reserve width for the widest word so the layout doesn't jump.
    var measurer = el.cloneNode(false);
    measurer.style.position = 'absolute';
    measurer.style.visibility = 'hidden';
    measurer.style.whiteSpace = 'nowrap';
    document.body.appendChild(measurer);
    var maxWidth = 0;
    words.forEach(function (w) {
      measurer.textContent = w;
      maxWidth = Math.max(maxWidth, measurer.getBoundingClientRect().width);
    });
    measurer.remove();
    el.style.display = 'inline-block';
    el.style.minWidth = Math.ceil(maxWidth) + 'px';

    setInterval(function () {
      el.classList.add('word-cycle-out');
      setTimeout(function () {
        index = (index + 1) % words.length;
        el.textContent = words[index];
        el.classList.remove('word-cycle-out');
        el.classList.add('word-cycle-in');
        setTimeout(function () {
          el.classList.remove('word-cycle-in');
        }, 350);
      }, 280);
    }, interval);
  });
})();
