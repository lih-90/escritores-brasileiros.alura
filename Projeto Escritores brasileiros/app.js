function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na página

    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa

    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
        // Constrói o HTML para cada resultado da pesquisa
        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>${dado.obras}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}