(function () {

  window.addEventListener('load', function() {
    window.parent.postMessage({ location: window.location.href }, '*');
  });

  window.addEventListener('message', function (e) {
    if (e.data.event === 'webSCT:request') {
      var error;

      try {
        window.eval(e.data.code);
      } catch(err) {
        error = err.message;
      }

      window.top.postMessage({
        event: 'webSCT:response'
      , error: error
      }, '*');
    }
  });

  [
    'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
  , 'http://external-production.codecademy.com/assets/jquery.expect.js'
  ].forEach(function (url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    document.querySelector('body').appendChild(s);
  });
})();
