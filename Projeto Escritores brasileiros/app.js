function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na página com base na entrada do usuário.
  
    let section = document.getElementById("resultados-pesquisa");
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Obtém o valor digitado pelo usuário no campo de pesquisa.
  
    console.log(campoPesquisa); // Loga o termo de pesquisa no console para fins de depuração.
  
    // Verifica se o usuário digitou algum termo de pesquisa.
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado encontrado. Digite a sua pesquisa.</p>";
      return; // Interrompe a função se não houver termo de pesquisa.
    }
  
    // Converte o termo de pesquisa para minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();
  
    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // Essa string será preenchida com o HTML dos resultados encontrados.
  
    // Itera sobre cada elemento (autor) do array 'dados'.
    for (let dado of dados) {
      // Converte os dados do autor para minúsculas para facilitar a comparação.
      nome = dado.nome.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      obras = dado.obras.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está contido em algum dos campos do autor.
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||
          obras.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar um resultado, cria um novo elemento HTML para exibir as informações do autor.
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.nome}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p>${dado.obras}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
  
      // Se nenhum resultado foi encontrado até agora, exibe uma mensagem informando.
      if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
      }
    }
  
    // Atribui o HTML gerado à seção de resultados, atualizando a página.
    section.innerHTML = resultados;
}  
