(function () {
  // Apply saved theme ASAP to avoid a flash of the wrong theme.
  // Default is light; only switch to dark when explicitly chosen.
  // Read order: localStorage first (per-browser), then cookie (cross-subdomain / persistent).
  var saved = null;
  try { saved = localStorage.getItem('turtle-theme'); } catch (e) {}
  if (!saved) {
    saved = readCookie('turtle-theme');
  }

  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  // Cookie helpers — persist the theme choice across the whole domain
  // (including subdomains) so it only has to be set once.
  function readCookie(name) {
    try {
      var parts = document.cookie ? document.cookie.split('; ') : [];
      for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split('=');
        if (pair[0] === name) {
          return decodeURIComponent(pair[1] || '');
        }
      }
    } catch (e) {}
    return null;
  }

  function writeCookie(name, value) {
    try {
      // domain=.turtle-smp.com covers the apex domain and all subdomains (www, web., etc.)
      // max-age=10 years, SameSite=Lax so it survives cross-area navigation.
      var host = window.location.hostname || '';
      var domain = host.indexOf('.') >= 0 ? '; domain=' + host : '';
      document.cookie =
        name + '=' + encodeURIComponent(value) +
        domain +
        '; path=/; max-age=315360000; SameSite=Lax';
    } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('turtle-theme', theme); } catch (e) {}
    writeCookie('turtle-theme', theme);
    syncButton();
  }

  function syncButton() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var dark = currentTheme() === 'dark';
    btn.textContent = dark ? '\u2600' : '\u263E';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
  }

  function init() {
    syncButton();
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
