document.getElementById("calcular").addEventListener("click", async () => {
    try {
        const response = await fetch("dados.json");
        const dados = await response.json();

        // Filtrar valores maiores que 0 (ignorar dias sem faturamento)
        const valores = dados.map(d => d.valor).filter(v => v > 0);

        // Calcular menor e maior valor
        const menor = Math.min(...valores);
        const maior = Math.max(...valores);

        // Calcular média mensal
        const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

        // Contar dias com faturamento acima da média
        const diasAcimaMedia = valores.filter(v => v > media).length;

        // Exibir resultados formatados como moeda brasileira
        document.getElementById("menor").textContent = menor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        document.getElementById("maior").textContent = maior.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        document.getElementById("diasAcimaMedia").textContent = diasAcimaMedia;
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
});
