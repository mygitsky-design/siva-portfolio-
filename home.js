/* ============================================================
   Home — Gradient canvas + smart header (handoff: Concept 9).
   Runs after /script.js. Progressive + reduced-motion safe.
   ============================================================ */
(function () {
  "use strict";
  const body = document.body;
  if (!body.classList.contains("home-cine")) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* The gradient canvas is a fixed-attachment CSS background on #main (see home.css) */

  /* GSAP content motion (headline, magnetic, work media) */
  if (!reduce && window.gsap && window.ScrollTrigger) {
    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    // Headline word-by-word mask reveal
    (function () {
      const title = document.querySelector(".home-cine .hero__title");
      if (!title || title.dataset.split) return;
      title.dataset.split = "1";
      title.removeAttribute("data-reveal");
      const words = title.textContent.trim().split(/\s+/);
      title.textContent = "";
      words.forEach((w, i) => {
        const outer = document.createElement("span"); outer.className = "hc-w";
        const inner = document.createElement("span"); inner.className = "hc-w__i"; inner.textContent = w;
        outer.appendChild(inner); title.appendChild(outer);
        if (i < words.length - 1) title.appendChild(document.createTextNode(" "));
      });
      gsap.from(title.querySelectorAll(".hc-w__i"), { yPercent: 120, duration: 0.9, ease: "power3.out", stagger: 0.05, delay: 0.05 });
    })();

    // Magnetic CTAs (fine pointers)
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".home-cine .hero__actions .btn").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          btn.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) / r.width * 10) + "px," + ((e.clientY - r.top - r.height / 2) / r.height * 8) + "px)";
        });
        btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
      });
    }

    // Work-card media scale-in
    gsap.utils.toArray(".work-card__media img").forEach((img) => {
      gsap.fromTo(img, { scale: 1.06 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img, start: "top 92%", end: "top 45%", scrub: 1 } });
    });

    window.addEventListener("load", () => window.ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => window.ScrollTrigger.refresh());
  }

})();

/* Smart header: hide on scroll-down, show on scroll-up, backdrop swap past the hero */
(function () {
  "use strict";
  const nav = document.querySelector(".home-cine .nav");
  if (!nav) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const REVEAL_TOP = 80;
  let lastY = window.scrollY, hidden = false;
  const onScroll = () => {
    const y = window.scrollY, dy = y - lastY, scrolled = y > REVEAL_TOP;
    nav.classList.toggle("is-scrolled", scrolled);
    if (!reduce && Math.abs(dy) >= 6) {
      if (dy > 0 && scrolled && !hidden) { hidden = true; nav.classList.add("is-hidden"); }
      else if (dy < 0 && hidden) { hidden = false; nav.classList.remove("is-hidden"); }
    }
    if (y <= REVEAL_TOP && hidden) { hidden = false; nav.classList.remove("is-hidden"); }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  nav.addEventListener("focusin", () => { hidden = false; nav.classList.remove("is-hidden"); });
  onScroll();
})();
