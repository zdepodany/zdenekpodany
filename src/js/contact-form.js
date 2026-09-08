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
      var response = await fetch('https://server.ecms.cz/api/email-sender/6a9fef0b25602adf44844417', {
        method: 'POST',
        body: new URLSearchParams({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      if (response.ok) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            method: 'contact_form',
          });
        }
        showFeedback('success', 'Zpráva byla odeslána. Děkuji, ozvu se vám co nejdříve.');
        form.reset();
      } else {
        throw new Error('Chyba ' + response.status);
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
