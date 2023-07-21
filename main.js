const form = document.getElementById('form')
const nomes = []
const phones = []
const spanSucesso = '<span class="sucesso">Contato adicionado com sucesso!</span>'

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})  

function adicionaLinha() {
    const nome = document.getElementById('nome')
    const phone = document.getElementById('phone')

    if (nomes.includes(nome.value)) {
        alert(`Atenção! Já existe um contato com esse nome:\nNome: ${nome.value}\nTelefone: ${phone.value}`)
    }
    else if (phones.includes(phone.value)) {
        alert(`Atenção! Já existe um contato com esse número:\nNome: ${nome.value}\nTelefone: ${phone.value}`)
    }
    else {

        nomes.push(nome.value)
        phones.push(phone.value)

        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${phone.value}</td>`
        linha += '</tr>'

        linhas += linha

        mensagemSucesso()
    }

    nome.value = ''
    phone.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function mensagemSucesso() {
document.getElementById('msg-sucesso').innerHTML = spanSucesso
}
