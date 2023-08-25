function limparSelects() {
    var selects = document.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        var filtro = selects[i];
        filtro.value = "";
        var opcaoCategoria = filtro.options[0];
        opcaoCategoria.disabled = false;
        opcaoCategoria.style.display = "";
    }

    // Seleciona os inputs do tipo number com base no atributo 'type'
    let inputsNumber = document.querySelectorAll('input[type="number"]');

    // Define o valor dos inputs do tipo number como o valor padrão definido no HTML
    inputsNumber.forEach(function (input) {
        input.value = input.defaultValue;
    });

}