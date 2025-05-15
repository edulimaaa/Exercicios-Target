// Objeto contendo o faturamento mensal por estado
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Calcula o valor total do faturamento somando os valores de todos os estados
const total = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

// Seleciona o elemento da tabela onde os resultados serão exibidos
const resultsElement = document.getElementById("results");

// Itera sobre cada estado no objeto de faturamento
for (const estado in faturamento) {
  const valor = faturamento[estado]; // Obtém o valor do faturamento do estado
  const percentual = ((valor / total) * 100).toFixed(2); // Calcula o percentual de representação

  // Adiciona uma nova linha na tabela com os dados do estado
  resultsElement.innerHTML += `
    <tr>
      <td>${estado}</td>
      <td>R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
      <td>${percentual}%</td>
    </tr>
  `;
}
