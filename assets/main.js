/* Field note 01 — progress, header state, contents */
(() => {
  'use strict';

  const doc = document.documentElement;
  const head = document.getElementById('siteHead');
  const bar = document.getElementById('progressBar');

  /* ---- progress + header state ---- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (head) head.classList.toggle('is-scrolled', y > 8);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- active contents entry ---- */
  const links = [...document.querySelectorAll('.contents a')];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      links.forEach((a) => {
        const on = a.getAttribute('href') === `#${id}`;
        a.setAttribute('aria-current', on ? 'true' : 'false');
        a.style.opacity = on ? '1' : '';
      });
    };
    const spy = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.2, 0.6] });
    sections.forEach((s) => spy.observe(s));
  }
})();
