(function () {
  let saved;
  try { saved = localStorage.getItem('turtle-theme'); } catch (_) {}
  document.documentElement.dataset.theme = saved === 'light' ? 'light' : 'dark';
  const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M19.07 4.93l-1.42 1.42M6.35 17.65l-1.42 1.42"/></svg>';
  const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 15.4A8.6 8.6 0 0 1 8.6 3.7 8.6 8.6 0 1 0 20.3 15.4Z"/></svg>';
  function sync() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    button.innerHTML = dark ? sun : moon;
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  }
  document.addEventListener('DOMContentLoaded', () => {
    sync();
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem('turtle-theme', theme); } catch (_) {}
      sync();
    });
  });
})();
