

// Adiciona um evento de clique no ícone do menu
document.getElementById("user-acesso").addEventListener("click", function() {
  // Obtém o elemento do menu dropdown
  var menuDropdown = document.getElementById("user-menu");

  // Se o menu dropdown estiver oculto, mostra-o
  if (menuDropdown.style.display === "none") {
      menuDropdown.style.display = "block";

      // Adiciona um evento de clique em qualquer lugar da página para fechar o menu dropdown
      document.addEventListener("click", closeMenuDropdown);
  }
  // Se o menu dropdown estiver visível, oculta-o
  else {
      menuDropdown.style.display = "none";
  }
});

// Função para fechar o menu dropdown quando o usuário clicar em qualquer lugar da página
function closeMenuDropdown(event) {
  // Obtém o elemento do menu dropdown
  var menuDropdown = document.getElementById("user-menu");

  // Se o elemento clicado não for o ícone do menu e nem o menu dropdown, oculta o menu dropdown
  if (event.target !== document.getElementById("user-acesso") && !menuDropdown.contains(event.target)) {
      menuDropdown.style.display = "none";

      // Remove o evento de clique em qualquer lugar da página
      document.removeEventListener("click", closeMenuDropdown);
  }
}
