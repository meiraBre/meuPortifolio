// Função para carregar um arquivo HTML e inserir no container
function loadHTML(containerId, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}

// Carregando o header e o footer
loadHTML('header-placeholder', '../assets/base/header.html');
loadHTML('footer-placeholder', '../assets/base/footer.html');