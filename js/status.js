(function () {
  const cfg = window.TURTLE_CONFIG;
  if (!cfg) return;

  const pillEl = document.getElementById('status-pill');
  const txtEl = document.getElementById('status-text');
  if (!pillEl || !txtEl) return;

  async function poll() {
    try {
      const r = await fetch(
        `https://api.mcstatus.io/v2/status/java/${encodeURIComponent(cfg.host)}`,
        { cache: 'no-store' }
      );
      if (!r.ok) throw new Error('http ' + r.status);
      const d = await r.json();
      pillEl.classList.remove('checking', 'online', 'offline');
      if (d.online) {
        pillEl.classList.add('online');
        txtEl.textContent = 'Server online';
      } else {
        pillEl.classList.add('offline');
        txtEl.textContent = 'Server offline';
      }
    } catch {
      pillEl.classList.remove('checking', 'online');
      pillEl.classList.add('offline');
      txtEl.textContent = 'Status unavailable';
    }
  }

  poll();
  setInterval(poll, cfg.refreshSec * 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) poll();
  });
})();
