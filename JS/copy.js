new ClipboardJS('.btn-clipboard');

function copy() {
    // Seleciona o elemento de saída
    const output = document.querySelector("#output-text");
  
    // Cria um novo elemento de texto e define o seu valor para o texto da saída
    const tempInput = document.createElement("textarea");
    tempInput.value = output.value;
  
    // Adiciona o novo elemento à página
    document.body.appendChild(tempInput);
  
    // Seleciona todo o texto do novo elemento
    tempInput.select();
  
    // Copia o texto para a área de transferência
    document.execCommand("copy");
  
    // Remove o novo elemento da página
    document.body.removeChild(tempInput);
  
    // Exibe uma mensagem informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
  }
  