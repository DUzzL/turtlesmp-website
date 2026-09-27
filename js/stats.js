(function () {
  'use strict';

  // ── Configuration ───────────────────────────────────────────────────
  // The stats endpoint exposed by the Stats Exporter mod (fronted by a
  // reverse proxy / Cloudflare Tunnel as an HTTPS subdomain). Change this
  // single constant if the endpoint moves.
  const STATS_ENDPOINT = 'https://api.turtle-smp.com/api/stats';

  // How often to re-fetch data client-side, in minutes. Aligned with the
  // mod's default cache interval (10 minutes).
  const REFRESH_INTERVAL_MINUTES = 10;

  // Assumption: hc_playTimeShow is stored in minutes.
  const MINUTES_PER_HOUR = 60;

  // ── DOM references ─────────────────────────────────────────────────
  const searchInput = document.getElementById('stats-search');
  const sortHeaders = document.querySelectorAll('#stats-table th.sortable[data-sort]');
  const body = document.getElementById('stats-body');
  const empty = document.getElementById('stats-empty');
  const loading = document.getElementById('stats-loading');
  const errorEl = document.getElementById('stats-error');
  const resultsCount = document.getElementById('results-count');
  const updatedEl = document.getElementById('stats-updated');
  const statPlayers = document.getElementById('stat-players');
  const statAdvancements = document.getElementById('stat-advancements');
  const statPlaytime = document.getElementById('stat-playtime');

  if (!body) return;

  // ── State ──────────────────────────────────────────────────────────
  let players = [];
  let sortKey = 'name';
  let sortDir = 'asc'; // 'asc' or 'desc'

  // ── Helpers ────────────────────────────────────────────────────────

  /** Escape a string for safe insertion into HTML. */
  function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  /**
   * Format a raw play-time value (assumed minutes) into a human-readable
   * "Xh Ym" string. Falls back to a raw value if it looks non-numeric.
   */
  function formatPlayTime(raw) {
    const totalMinutes = Number(raw);
    if (!Number.isFinite(totalMinutes) || totalMinutes < 0) return escape(raw);
    const hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
    const minutes = Math.floor(totalMinutes % MINUTES_PER_HOUR);
    if (hours > 0) {
      return hours + 'h ' + minutes + 'm';
    }
    if (minutes > 0) {
      return minutes + 'm';
    }
    return '0m';
  }

  /** Format an ISO timestamp into a friendly "last updated" string. */
  function formatUpdated(iso) {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return '';
      return 'Updated ' + d.toLocaleString(undefined, {
        dateStyle: 'medium', timeStyle: 'short'
      });
    } catch (e) {
      return '';
    }
  }

  /** Compare two values for sorting, with direction awareness. */
  function compare(a, b) {
    let cmp;
    if (sortKey === 'name') {
      cmp = String(a.name).localeCompare(String(b.name), undefined, { sensitivity: 'base' });
    } else {
      cmp = (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0);
    }
    return sortDir === 'asc' ? cmp : -cmp;
  }

  // ── Rendering ──────────────────────────────────────────────────────

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = players.filter(p =>
      !q || String(p.name).toLowerCase().includes(q)
    );
    filtered.sort(compare);

    body.innerHTML = '';
    if (!filtered.length) {
      empty.style.display = 'block';
      resultsCount.innerHTML = '<strong>0</strong> players';
      return;
    }
    empty.style.display = 'none';

    resultsCount.innerHTML = '<strong>' + filtered.length + '</strong> player' +
      (filtered.length === 1 ? '' : 's') +
      (players.length !== filtered.length ? ' of ' + players.length : '');

    const frag = document.createDocumentFragment();
    filtered.forEach((p, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td class="col-rank">' + (i + 1) + '</td>' +
        '<td class="col-player">' +
          '<img class="player-head" src="https://mc-heads.net/avatar/' + encodeURIComponent(p.name) + '/64" alt="" loading="lazy" width="32" height="32">' +
          '<span class="player-name">' + escape(p.name) + '</span>' +
        '</td>' +
        '<td class="col-advancements num">' + escape(p.bac_advancements) + '</td>' +
        '<td class="col-playtime num">' + escape(formatPlayTime(p.hc_playTimeShow)) + '</td>';
      frag.appendChild(tr);
    });
    body.appendChild(frag);
  }

  /** Update the top summary cards from the full (unfiltered) player list. */
  function renderSummary() {
    if (!statPlayers) return;
    if (!players.length) {
      statPlayers.textContent = '–';
      statAdvancements.textContent = '–';
      statPlaytime.textContent = '–';
      return;
    }
    const totalAdvancements = players.reduce((sum, p) => sum + (Number(p.bac_advancements) || 0), 0);
    const totalMinutes = players.reduce((sum, p) => sum + (Number(p.hc_playTimeShow) || 0), 0);
    statPlayers.textContent = players.length.toLocaleString();
    statAdvancements.textContent = totalAdvancements.toLocaleString();
    statPlaytime.textContent = formatPlayTime(totalMinutes);
  }

  // ── Data fetching ───────────────────────────────────────────────────

  async function fetchStats() {
    try {
      loading.style.display = 'block';
      errorEl.style.display = 'none';
      const r = await fetch(STATS_ENDPOINT, { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const data = await r.json();
      players = Array.isArray(data.players) ? data.players : [];
      loading.style.display = 'none';
      updatedEl.textContent = formatUpdated(data.lastUpdated);
      renderSummary();
      render();
    } catch (e) {
      loading.style.display = 'none';
      players = [];
      body.innerHTML = '';
      resultsCount.innerHTML = '';
      updatedEl.textContent = '';
      renderSummary();
      errorEl.style.display = 'block';
      errorEl.textContent = 'Could not reach the statistics endpoint. Please try again later.';
      // eslint-disable-next-line no-console
      console.warn('[stats] fetch failed:', e);
    }
  }

  // ── Event wiring ───────────────────────────────────────────────────

  if (searchInput) {
    searchInput.addEventListener('input', render);
  }

  function handleSortClick(key) {
    if (key === sortKey) {
      // Same column clicked — toggle direction.
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      // Default direction: asc for name, desc for numeric metrics.
      sortDir = (key === 'name') ? 'asc' : 'desc';
    }
    updateSortUI();
    render();
  }

  sortHeaders.forEach(th => {
    th.addEventListener('click', () => handleSortClick(th.getAttribute('data-sort')));
  });

  /** Sync the sortable header UI (active state + arrow) with current state. */
  function updateSortUI() {
    sortHeaders.forEach(th => {
      const isActive = th.getAttribute('data-sort') === sortKey;
      th.classList.toggle('active', isActive);
      const arrow = th.querySelector('.sort-arrow');
      if (arrow) arrow.textContent = isActive ? (sortDir === 'asc' ? '↑' : '↓') : '';
    });
  }

  // ── Init ───────────────────────────────────────────────────────────
  updateSortUI();
  fetchStats();
  // Periodically re-fetch to reflect updated stats without a page reload.
  setInterval(fetchStats, REFRESH_INTERVAL_MINUTES * 60 * 1000);
  // Re-fetch when the tab becomes visible again.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) fetchStats();
  });
})();
