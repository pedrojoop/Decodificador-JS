// Seleciona os elementos HTML que serão usados
const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");
const decryptBtn = document.querySelector("#decrypt-btn");

// Cria a função que será executada quando o botão for clicado
function decrypt() {
  // Obtém o texto criptografado do elemento de entrada
  const encryptedText = input.value;

  // Descriptografa o texto
  const decryptedText = encryptedText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Sanitiza o texto descriptografado para evitar injeção de código
  const sanitizedText = window.DOMPurify.sanitize(decryptedText);

  // Define o texto descriptografado no elemento de saída
  output.value = sanitizedText;
}

// Adiciona um ouvinte de eventos para o botão de descriptografia
decryptBtn.addEventListener("click", decrypt);
