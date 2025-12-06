 const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle menu
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Close the drawer automatically when a link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show"); // hide the drawer
    navToggle.classList.remove("active"); // remove toggle animation (if any)
  });
});


// Scroll active highlight
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
 AOS.init({
  duration: 1000,
  offset: 120,
  easing: 'ease-in-out',
  once: true,
})
});
