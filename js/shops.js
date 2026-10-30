(function () {
  const SHOPS = window.SHOPS || [];

  const searchInput = document.getElementById('shop-search');
  const tagFilters = document.getElementById('tag-filters');
  const shopGrid = document.getElementById('shop-grid');
  const shopEmpty = document.getElementById('shop-empty');
  const resultsCount = document.getElementById('results-count');

  if (!searchInput || !shopGrid) return;

  const allTags = [...new Set(SHOPS.flatMap(s => s.tags))].sort();
  const activeTags = new Set();

  allTags.forEach(tag => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'tag-chip';
    chip.textContent = tag;
    chip.addEventListener('click', () => {
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        chip.classList.remove('active');
      } else {
        activeTags.add(tag);
        chip.classList.add('active');
      }
      render();
    });
    tagFilters.appendChild(chip);
  });

  function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function highlight(text, q) {
    if (!q) return escape(text);
    const safe = escape(text);
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function matches(shop, q) {
    if (!q) return true;
    const ql = q.toLowerCase();
    return shop.name.toLowerCase().includes(ql)
        || shop.owner.toLowerCase().includes(ql)
        || shop.tags.some(t => t.toLowerCase().includes(ql))
        || shop.items.some(i => i.toLowerCase().includes(ql));
  }

  function render() {
    const q = searchInput.value.trim();
    const ql = q.toLowerCase();

    const filtered = SHOPS.filter(s => {
      if (activeTags.size && !s.tags.some(t => activeTags.has(t))) return false;
      return matches(s, q);
    });

    filtered.sort((a, b) => {
      const priority = { specialized: 0, general: 1 };
      const typeOrder = (priority[a.type] ?? 2) - (priority[b.type] ?? 2);
      if (typeOrder) return typeOrder;
      return a.name.localeCompare(b.name);
    });

    shopGrid.innerHTML = '';
    if (!filtered.length) {
      shopEmpty.style.display = 'block';
      resultsCount.innerHTML = '<strong>0</strong> shops';
      return;
    }
    shopEmpty.style.display = 'none';

    const specCount = filtered.filter(s => s.type === 'specialized').length;
    const genCount = filtered.filter(s => s.type === 'general').length;
    const unknownCount = filtered.length - specCount - genCount;
    resultsCount.innerHTML = `<strong>${filtered.length}</strong> shop${filtered.length === 1 ? '' : 's'} · ${specCount} specialized, ${genCount} general${unknownCount ? `, ${unknownCount} unspecified` : ''}`;

    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'shop-card ' + s.type;

      const matched = q ? s.items.filter(i => i.toLowerCase().includes(ql)) : [];

      card.innerHTML = `
        <div class="shop-head">
          <div class="shop-name">${highlight(s.name, q)}</div>
          <div class="shop-badge ${s.type === 'specialized' ? 'badge-spec' : 'badge-gen'}">${s.type ? escape(s.type) : 'Type not specified'}</div>
        </div>
        <div class="shop-meta">
          <div class="row"><span class="key">Owner</span><span class="owner">${highlight(s.owner, q)}</span></div>
          <div class="row"><span class="key">At</span><span>${s.location.trim() ? escape(s.location) : 'Not specified'}</span></div>
          <div class="row"><span class="key">Tags</span><div class="shop-tags">${s.tags.map(t => `<span class="shop-tag">${highlight(t, q)}</span>`).join('')}</div></div>
        </div>
        <details class="shop-items">
          <summary><span>Sells (${s.items.length})</span><span class="shop-items-arrow" aria-hidden="true">⌄</span></summary>
          <div class="item-list">
            ${s.items.map(i => `<span class="item">${highlight(i, q)}</span>`).join('')}
          </div>
        </details>
        ${matched.length ? `<div class="shop-matches"><span class="label">Matching items (${matched.length})</span><div class="item-list">${matched.map(i => `<span class="item">${highlight(i, q)}</span>`).join('')}</div></div>` : ''}
      `;
      shopGrid.appendChild(card);
    });
  }

  let debounce;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(render, 80);
  });

  render();
})();
