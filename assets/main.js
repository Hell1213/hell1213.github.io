/* Field Note 01 — reading progress, reveals, contents, lightbox */
(() => {
  'use strict';

  const doc = document.documentElement;
  const head = document.getElementById('siteHead');
  const bar = document.getElementById('progressBar');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  /* ---- reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

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

  /* ---- lightbox ---- */
  const dialog = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  const closeBtn = dialog ? dialog.querySelector('.lb-close') : null;
  let lastFocus = null;

  const open = (btn) => {
    lastFocus = btn;
    lbImg.src = btn.dataset.full || '';
    lbImg.alt = btn.querySelector('img')?.alt || '';
    lbCap.textContent = btn.dataset.caption || '';
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  document.querySelectorAll('[data-full]').forEach((btn) => {
    btn.addEventListener('click', () => open(btn));
  });

  if (dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      lbImg.removeAttribute('src');
      if (lastFocus) lastFocus.focus();
    });
  }
})();
