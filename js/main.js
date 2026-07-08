/* Niteesh Nuthi portfolio — progressive enhancement only.
   Page must stay fully readable if none of this runs. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* ── Count-up metrics ──────────────────────────────────────── */
  function formatNum(n, comma) {
    return comma ? n.toLocaleString('en-US') : String(n);
  }

  function setFinal(el) {
    el.textContent = formatNum(parseInt(el.dataset.target, 10), el.dataset.comma);
  }

  function countUp(el) {
    var target = parseInt(el.dataset.target, 10);
    var duration = 1200;
    var start = null;

    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      el.textContent = formatNum(Math.round(target * eased), el.dataset.comma);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll('.count');

  if (reducedMotion || !hasIO) {
    counters.forEach(setFinal);
  } else {
    var metricsEl = document.getElementById('metrics');
    if (metricsEl) {
      var counted = false;
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting && !counted) {
          counted = true;
          counters.forEach(countUp);
          obs.disconnect();
        }
      }, { threshold: 0.4 }).observe(metricsEl);
    }
  }

  /* ── Reveal on scroll ──────────────────────────────────────── */
  if (hasIO && !reducedMotion) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Scroll-spy nav ────────────────────────────────────────── */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));

  if (hasIO && navLinks.length) {
    var linkFor = {};
    navLinks.forEach(function (a) {
      linkFor[a.getAttribute('href').slice(1)] = a;
    });

    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = linkFor[e.target.id];
        if (!link) return;
        if (e.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    ['experience', 'projects', 'skills', 'contact'].forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) spyObs.observe(sec);
    });
  }

  /* ── Mobile hamburger ──────────────────────────────────────── */
  var burger = document.getElementById('hamburger');
  var menu = document.getElementById('navLinks');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    // close menu after choosing a section
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
