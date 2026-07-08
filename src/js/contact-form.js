(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  var submitBtn = form.querySelector('button[type="submit"]');
  var feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    submitBtn.disabled = true;
    submitBtn.textContent = 'Odesílám...';

    try {
      var response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          service: formData.get('service'),
          message: formData.get('message'),
        }),
      });
      var data = await response.json();
      if (data.ok) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            service_type: formData.get('service') || 'neuvedeno',
            method: 'contact_form',
          });
        }
        showFeedback('success', 'Zpráva byla odeslána. Děkuji, ozvu se vám co nejdříve.');
        form.reset();
      } else {
        throw new Error(data.error || 'Chyba');
      }
    } catch (err) {
      showFeedback('error', 'Něco se pokazilo. Zkuste to prosím znovu nebo mi napište přímo na zdenek@zdenekpodany.cz.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Odeslat zprávu';
    }
  });

  function showFeedback(status, message) {
    if (!feedback) return;
    feedback.hidden = false;
    feedback.textContent = message;
    feedback.className = 'form-feedback form-feedback--' + status;
  }
})();
