const cursor = document.querySelector(".cursor");
const cursorText = document.querySelector(".cursor-text");

// Track mouse position
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
  currentX += (mouseX - currentX) * 0.18;
  currentY += (mouseY - currentY) * 0.18;

  cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Elements that trigger cursor hover
const hoverTargets = document.querySelectorAll(
  "a, button, .portfolio-item, .visit-btn, .magnetic, nav a"
);

hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";

    // Add semi-transparent red fill like your original site
    cursor.style.background = "rgba(220,20,60,0.13)";
    cursor.style.borderColor = "#dc143c";

    cursorText.innerHTML = "VIEW";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    cursor.style.background = "transparent"; // remove fill
    cursor.style.borderColor = "#dc143c";
    cursorText.innerHTML = "";
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heroBtn = document.getElementById('hero-portfolio-btn');
  const portfolioSection = document.getElementById('portfolio-section');

  if (heroBtn && portfolioSection) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
