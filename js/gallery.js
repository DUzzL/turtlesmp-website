(function () {
  const slides = window.TURTLE_GALLERY || [];
  const image = document.getElementById('gallery-image');
  const backdrop = document.getElementById('gallery-backdrop');
  const credit = document.getElementById('gallery-credit');
  const gallery = document.querySelector('.gallery');
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  if (!image || !gallery || slides.length < 2 || !prev || !next) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let hovering = false;
  let focused = false;
  let timer;
  let request = 0;
  function render(index) {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    const requestId = ++request;
    const loaded = new Image();
    loaded.onload = () => {
      if (requestId !== request) return;
      image.src = slide.src;
      if (backdrop) backdrop.src = slide.src;
      image.alt = slide.alt || 'A community screenshot of the Turtle SMP Minecraft world';
      credit.textContent = slide.credit;
      credit.title = slide.credit;
      const preload = new Image();
      preload.src = slides[(current + 1) % slides.length].src;
    };
    loaded.src = slide.src;
  }
  function schedule() {
    clearInterval(timer);
    if (!motion.matches && !document.hidden && !hovering && !focused) timer = setInterval(() => render(current + 1), 6500);
  }
  prev.addEventListener('click', () => { render(current - 1); schedule(); });
  next.addEventListener('click', () => { render(current + 1); schedule(); });
  gallery.addEventListener('mouseenter', () => { hovering = true; schedule(); });
  gallery.addEventListener('mouseleave', () => { hovering = false; schedule(); });
  gallery.addEventListener('focusin', () => { focused = true; schedule(); });
  gallery.addEventListener('focusout', event => { if (!gallery.contains(event.relatedTarget)) { focused = false; schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener?.('change', schedule);
  render(0); schedule();
})();
