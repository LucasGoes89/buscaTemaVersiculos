//console.log(dados);

function pesquisar(){
    let section = document.getElementById ("resultados-pesquisa")

    let campoPesquisa = document.getElementById ("campo_pesquisa").value

    console.log(campoPesquisa);

    let resultados = ""
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite algum tema para pesquisa</p>" 
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    //para cada dado dentro da lista de dados
    
    let versiculos = "";
    let lista = "";
    let tags = "";

    for (let dado of dados){
        versiculos = dado.versiculos.toLowerCase()
        lista = dado.lista.toLowerCase()
        tags = dado.tags.toLowerCase()
        //Se no dado título includes o campoPesquisa 
        if (versiculos.includes(campoPesquisa) || lista.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.versiculos}</a>
                </h2>
                <p class="descricao-meta">${dado.lista}</p>
                <a href="${dado.link}" target="_blank">Acesse a Bíblia</a>
            </div>
            `
        //então execute
        }
    }
        if (!resultados){
            resultados = "<p>Não foi encontrado nada com esse tema</p>"
        }
       // console.log(dado.versiculos.includes(campoPesquisa))
    
    
    section.innerHTML = resultados
}





