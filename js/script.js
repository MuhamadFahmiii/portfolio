/* ============================================================
   Muhamad Fahmi — Portfolio
   Interactions: mobile nav, scroll spy, reveal animations
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Navbar: shadow on scroll ---------- */
  const navbar = document.getElementById("navbar");

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a link is tapped
  navLinks.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Scroll spy: highlight active section ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const linkMap = new Map();

  document.querySelectorAll(".nav-link").forEach(function (link) {
    linkMap.set(link.getAttribute("href").slice(1), link);
  });

  const spyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const active = linkMap.get(entry.target.id);
        if (!active) return; // section without a nav link keeps the last highlight
        linkMap.forEach(function (link) { link.classList.remove("active"); });
        active.classList.add("active");
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(function (s) { spyObserver.observe(s); });

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
