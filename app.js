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


const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Button state
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Hide form
      form.classList.add("hidden");

      // Show success message
      successMessage.classList.add("show");

      // Clear form
      form.reset();

      // After 4 seconds → restore form
      setTimeout(() => {
        successMessage.classList.remove("show");
        form.classList.remove("hidden");

        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;
      }, 4000);
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");

    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
  }
});
