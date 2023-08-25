

// Adiciona um evento de clique no ícone do menu
document.getElementById("acesso_usuario").addEventListener("click", function() {
    // Obtém o elemento do menu dropdown
    var menuDropdown = document.getElementById("usuario");
  
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
    var menuDropdown = document.getElementById("usuario");
  
    // Se o elemento clicado não for o ícone do menu e nem o menu dropdown, oculta o menu dropdown
    if (event.target !== document.getElementById("acesso_usuario") && !menuDropdown.contains(event.target)) {
        menuDropdown.style.display = "none";
  
        // Remove o evento de clique em qualquer lugar da página
        document.removeEventListener("click", closeMenuDropdown);
    }
  }
  
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
