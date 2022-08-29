
/* Case sensitive 
    por tag : getElementByTagName()
    por id : getElementID()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
    */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeok = false
let emailok = false
let assuntook = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = 'green'
        nomeok = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emailok = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >=  5) {
        txtAssunto.innerHTML = 'vamos resumir por favor'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntook = true
    }
}
function enviar() {
    if (nomeok == true && emailok == true && assuntook == true) {
        alert('Formulario enviado')
    } else {
        alert('Preencha os campos')
    }
}

function mapazoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapanormal() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'

}