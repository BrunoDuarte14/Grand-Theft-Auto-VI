function Pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value 

    // se campoPesquisa for  uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado</p>"
        return
    }

     campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    // Itera sobre cada item de dado na lista 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
              // então, faça....
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói e cria um novo HTML para cada resultado, formatando o título e a descrição
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        }
     
      }

      if (!resultados) {
          resultados = "<p>Nada foi encontrado</p>"

      }

    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}