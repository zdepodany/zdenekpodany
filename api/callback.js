module.exports = async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    res.status(400).send('Missing code parameter');
    return;
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  const content = tokenData.error
    ? { error: tokenData.error_description || tokenData.error }
    : { provider: 'github', token: tokenData.access_token };

  const status = tokenData.error ? 'error' : 'success';
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};
