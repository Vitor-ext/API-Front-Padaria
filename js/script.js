window.onload = function handler() {

    axios.get('http://127.0.0.1:8080/api/itens-padaria')
        .then(response => criaListaDinamica(response.data))
        .catch(error => console.log(error))
    const criaListaDinamica = (itens) => {
        const ulItens = document.getElementById('itens')
        itens.map(item => {
            const listaItemId = document.createElement('td')
            const listaItemDescricao = document.createElement('td')
            const listaItemPreco = document.createElement('td')
            listaItemId.innerHTML = `${item.id}`
            listaItemDescricao.innerHTML = `${item.descricao}`
            listaItemPreco.innerHTML = `${item.preco}`
            ulItens.appendChild(listaItemId)
            ulItens.appendChild(listaItemDescricao)
            ulItens.appendChild(listaItemPreco)

        })
    }
}
