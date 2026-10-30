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

  function updateCardLayout() {
    const cards = [...shopGrid.querySelectorAll('.shop-card')];
    if (!cards.length) return;

    const columns = getComputedStyle(shopGrid).gridTemplateColumns.split(' ').length;
    const expandedOffers = cards.map(card => {
      const offers = card.querySelector('.shop-offers');
      const wasHidden = offers.hidden;
      offers.hidden = true;
      card.style.minHeight = '';
      card.style.gridRowEnd = '';
      return { offers, wasHidden };
    });

    // Keep the initial overview aligned, while searches use each card's natural height.
    const heights = cards.map(card => card.getBoundingClientRect().height);
    if (!searchInput.value.trim()) {
      for (let i = 0; i < cards.length; i += columns) {
        const rowHeight = Math.max(...heights.slice(i, i + columns));
        cards.slice(i, i + columns).forEach(card => { card.style.minHeight = rowHeight + 'px'; });
      }
    }
    expandedOffers.forEach(({ offers, wasHidden }) => { offers.hidden = wasHidden; });

    const spans = cards.map(card => Math.ceil(card.getBoundingClientRect().height + 20));
    cards.forEach((card, index) => {
      card.style.gridColumn = String(index % columns + 1);
      card.style.gridRowEnd = 'span ' + spans[index];
    });
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

    filtered.forEach((s, index) => {
      const card = document.createElement('div');
      card.className = 'shop-card ' + s.type;

      const matched = q ? s.items.filter(i => i.toLowerCase().includes(ql)) : [];
      const remaining = q ? s.items.filter(i => !i.toLowerCase().includes(ql)) : s.items;
      const offersId = 'shop-offers-' + index;

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
        <div class="shop-items">
          <button type="button" class="shop-items-toggle" aria-expanded="false" aria-controls="${offersId}">
            <span>Sells (${s.items.length})</span><svg class="shop-items-arrow" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          ${matched.length ? `<div class="shop-matches"><span class="label">Matching items (${matched.length})</span><div class="item-list">${matched.map(i => `<span class="item">${highlight(i, q)}</span>`).join('')}</div></div>` : ''}
          <div class="shop-offers" id="${offersId}" hidden>
            ${remaining.length ? `<div class="item-list">${remaining.map(i => `<span class="item">${highlight(i, q)}</span>`).join('')}</div>` : '<p class="shop-no-more">No other items.</p>'}
          </div>
        </div>
      `;
      const toggle = card.querySelector('.shop-items-toggle');
      const offers = card.querySelector('.shop-offers');
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        offers.hidden = expanded;
        card.style.gridRowEnd = 'span ' + Math.ceil(card.getBoundingClientRect().height + 20);
      });
      shopGrid.appendChild(card);
    });
    updateCardLayout();
  }

  let debounce;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(render, 80);
  });

  window.addEventListener('resize', updateCardLayout);
  if (document.fonts) document.fonts.ready.then(updateCardLayout);
  render();
})();
