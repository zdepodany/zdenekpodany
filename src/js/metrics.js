(function () {
  var els = document.querySelectorAll('.metric-number');
  if (!els.length) return;

  function animateCount(el, target, suffix, duration) {
    var start = performance.now();
    function run(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * ease) + suffix;
      if (progress < 1) requestAnimationFrame(run);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(run);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        var el = entry.target;
        el.dataset.animated = 'true';
        var target = parseInt(el.dataset.count || '0', 10);
        var suffix = el.dataset.suffix || '';
        animateCount(el, target, suffix, 1500);
      }
    });
  }, { threshold: 0.5 });

  els.forEach(function (el) { observer.observe(el); });
})();
