document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section.artigo");
  const navLinks = document.querySelectorAll(".sidebar a");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  // Scroll ativo com IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.sidebar a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, {
    threshold: 0.6,
  });

  sections.forEach(section => observer.observe(section));


