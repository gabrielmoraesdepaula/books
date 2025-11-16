  function mostrarDetalhes(id) {
    const detalhes = document.getElementById(id);
    detalhes.style.display =
      detalhes.style.display === "block" ? "none" : "block";
  }

  // Transição suave entre páginas
document.querySelectorAll("a.transition-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;

    // Aplicar efeito fade-out
    document.body.classList.add("fade-out");

    // Aguardar transição e ir para a página
    setTimeout(() => {
      window.location.href = url;
    }, 250);
  });
});

// Detectar página atual e ativar item do menu
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

function pesquisarLivro() {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  const livros = document.getElementsByClassName("book-item");

  for (let livro of livros) {
    const titulo = livro.querySelector(".book-title").textContent.toLowerCase();
    livro.style.display = titulo.includes(termo) ? "block" : "none";
  }
}

/* Transição suave entre páginas */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".transition-link");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    });
  });
});