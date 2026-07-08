(function () {
  var wrapper = document.getElementById('pricing-table');
  if (!wrapper) return;
  var buttons = wrapper.querySelectorAll('.pt-toggle-btn');

  function setBilling(billing) {
    var yearly = billing === 'yearly';
    buttons.forEach(function (btn) {
      var active = btn.dataset.billing === billing;
      btn.classList.toggle('pt-toggle-btn--active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    wrapper.querySelectorAll('.pt-plan-price').forEach(function (el) {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
    wrapper.querySelectorAll('.pt-plan-period').forEach(function (el) {
      el.innerHTML = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
    wrapper.querySelectorAll('.pt-plan-equiv').forEach(function (el) {
      el.hidden = !yearly;
      if (yearly) el.textContent = el.dataset.yearlyEquiv;
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { setBilling(btn.dataset.billing); });
  });
})();
