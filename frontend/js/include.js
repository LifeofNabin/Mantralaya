document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;

      // ✅ After injecting navbar, initialize main.js toggle
      if (file.includes("nav.html") && typeof initNavbarToggle === "function") {
        initNavbarToggle();
      }
    } catch (err) {
      console.error("Include failed:", file, err);
      el.innerHTML = "<p style='color:red;'>Failed to load navbar.</p>";
    }
  });
});
