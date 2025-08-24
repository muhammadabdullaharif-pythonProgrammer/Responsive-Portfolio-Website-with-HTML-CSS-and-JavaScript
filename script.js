// Theme Toggle (Dark/Light Mode)
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form Submission (Fake Demo)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  status.textContent = "✅ Thank you! Your message has been sent.";
  status.style.color = "green";
  form.reset();
});
