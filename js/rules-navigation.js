(function () {
  const links = [...document.querySelectorAll('.rules-index a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.getAttribute('href').slice(1)));
  if (!links.length || sections.some(section => !section)) return;
  let queued = false;
  function update() {
    queued = false;
    const threshold = Math.min(window.innerHeight * 0.3, 220);
    let active = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) active = index;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function queueUpdate() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', queueUpdate);
  update();
})();
