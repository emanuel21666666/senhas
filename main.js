const numerosenha = document.querySelector('.parametro-senha_texto')
let lamanhosenh = 12
numerosenha.textContent = tamanhosenha;

const botoes = document.querySelectorall('.parametro-senha-botoes')

botoes[0].onclick = diminuitananho;

function diminuitananho{}{
    tamanhosenha = tamanhosenha-1;
    numerosenha.textContent = tamanhosenha;
}

const camposenha = document.querySelector('#campo-senha')

const letrasmaiusculas = 'abcdefghijklmnopqrstuvwxyz'

camposenha.textContent = letrasmaiusculas;