function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="principais-obras"><strong>Principais obras:</strong> ${dado.principaisObras}</p>
                <a href="${dado.linkBiografia}" target="_blank">Ver biografia completa</a>
            </div>   
            `;
        }
        
    }

    if (!resultados) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    section.innerHTML = resultados
    
}

