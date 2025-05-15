// Função para inverter uma string
function invertString(inputString) {
  let invertedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    invertedString += inputString[i];
  }
  return invertedString;
}

// Função para lidar com o clique no botão
function handleButtonClick() {
  const inputString = document.getElementById("inputString").value;

  // Verifica se a entrada está vazia
  if (!inputString) {
    displayResult("Por favor, insira uma string.");
    return;
  }

  // Inverte a string e exibe o resultado
  const result = invertString(inputString);
  displayResult(`String invertida: ${result}`);
}

// Função para exibir o resultado
function displayResult(message) {
  document.getElementById("result").textContent = message;
}

// Adiciona o evento de clique ao botão
document
  .getElementById("invertButton")
  .addEventListener("click", handleButtonClick);
