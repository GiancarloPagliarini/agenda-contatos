const form = document.querySelector('#form-agenda')
const nomes = []
const telefones = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    adicionaTabela()
    
})

function adicionaLinha() {
    const inputNome = document.querySelector('#nome-pessoa')
    const inputTell = document.querySelector('#numero-pessoa')

    if (nomes.includes(inputNome.value) || telefones.includes(inputTell.value)) {
        alert('Nome ou telefone repetido!')
    } else {
        nomes.push(inputNome.value)
        telefones.push(inputTell.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTell.value}</td>`
        linha += '</tr>'

        linhas += linha
    }
    inputNome.value = ''
    inputTell.value = ''
}

function adicionaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}