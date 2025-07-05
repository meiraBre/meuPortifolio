document.addEventListener("DOMContentLoaded", () => {
  fetch("../assets/base/common-contact.html")
    .then(response => response.text())
    .then(html => {
      const div = document.createElement("div");
      div.innerHTML = html;
      document.body.appendChild(div);

      const openBtn = document.getElementById("open-contact");
      const closeBtn = document.getElementById("close-contact");
      const formContainer = document.getElementById("contact-form-container");
      const form = document.getElementById("contact-form");

      openBtn.addEventListener("click", () => formContainer.classList.remove("hidden"));
      closeBtn.addEventListener("click", () => formContainer.classList.add("hidden"));

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        form.reset();
        formContainer.classList.add("hidden");
      });
    });
});
