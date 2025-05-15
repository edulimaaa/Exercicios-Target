// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
  let a = 0,
    b = 1; // Inicializa os dois primeiros números da sequência
  while (a <= num) {
    if (a === num) return true; // Retorna true se o número for encontrado na sequência
    let next = a + b; // Calcula o próximo número da sequência
    a = b; // Atualiza o valor de 'a' para o próximo número
    b = next; // Atualiza o valor de 'b' para o próximo número
  }
  return false; // Retorna false se o número não for encontrado
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("fibonacciInput"); // Campo de entrada
  const checkButton = document.getElementById("checkFibonacci"); // Botão de verificação
  const messageField = document.getElementById("fibonacciMessage"); // Campo para exibir a mensagem

  // Evento para permitir apenas números no campo de entrada
  inputField.addEventListener("input", () => {
    inputField.value = inputField.value.replace(/\D/g, ""); // Remove qualquer caractere que não seja número
  });

  // Evento de clique no botão para verificar se o número pertence à sequência de Fibonacci
  checkButton.addEventListener("click", () => {
    const num = parseInt(inputField.value); // Converte o valor do campo de entrada para um número inteiro

    if (isNaN(num)) {
      // Verifica se o valor é inválido
      messageField.textContent = "Por favor, insira um número válido."; // Exibe mensagem de erro
      messageField.style.color = "red"; // Define a cor da mensagem como vermelha
    } else if (isFibonacci(num)) {
      // Verifica se o número pertence à sequência de Fibonacci
      messageField.textContent = `O número ${num} pertence à sequência de Fibonacci.`; // Exibe mensagem de sucesso
      messageField.style.color = "green"; // Define a cor da mensagem como verde
    } else {
      // Caso o número não pertença à sequência
      messageField.textContent = `O número ${num} NÃO pertence à sequência de Fibonacci.`; // Exibe mensagem de erro
      messageField.style.color = "red"; // Define a cor da mensagem como vermelha
    }
  });
});
