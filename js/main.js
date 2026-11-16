// =========================================================
// Stefan Visser Portfolio: main.js
// Shared behaviour loaded on every page
// =========================================================


// ---------- 1. Mobile navigation toggle ----------
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

function closeMenu() {
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
}

if (header && navToggle) {
  // Open/close when the hamburger is clicked
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      closeMenu();
      navToggle.focus();
    }
  });
}


// ---------- 2. Footer year ----------
// Keeps the copyright year current without manual updates
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}