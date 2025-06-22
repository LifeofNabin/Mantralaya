// Mobile nav toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
