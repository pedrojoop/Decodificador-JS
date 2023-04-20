function encrypt() {
    console.log('Encrypt button clicked');
    const input = document.getElementById('input-text');
    let output = document.getElementById('output-text');
  
    const sanitizedText = DOMPurify.sanitize(input.value);
    const result = sanitizedText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    output.value = result;
  }
  
  const encryptButton = document.getElementById('encrypt-btn');
  encryptButton.addEventListener('click', encrypt);
  