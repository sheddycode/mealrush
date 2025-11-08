// sidebar scripts
 const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
   overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
   overlay.classList.remove("active");
});


// sidebar scripts ends here

  const items = document.querySelectorAll(".rotate-item");
  let index = 0;

  setInterval(() => {
    items[index].classList.remove("active");
    index = (index + 1) % items.length;
    items[index].classList.add("active");
  }, 3500); // change every 3.5 seconds

  // ANIMATION SCRIPTS HERE //
  document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-show");
        entry.target.classList.add("animate-hero-show");
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% visible

  // Observe each card
  document.querySelectorAll('.animate-one, .animate-two, animate-hero  .animate-three')
    .forEach(el => observer.observe(el));
});