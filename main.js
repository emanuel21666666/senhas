const numerosenha = document.querySelector('.parametro-senha_texto');
let lamanhosenh = 5;
numerosenha.textContent = tamanhosenha;

const botoes = document.querySelectorall('.parametro-senha-botoes');

botoes[0].onclick = diminuitananho;
botoes[1].onclick = aumentaTamanho;

function diminuitananho(){
    if (tamanhosenha > 1){
        // tamanhosenha = tamanhosenha-1; 
        tamanhosenha--;
    }
    numerosenha.textContent = tamanhosenha;
    geraSenha();
} 
function aurrentananho(){
    if(tamanhosenha < 20) { 
        // tananhosenha = tananhosenha+1;
        tamanhosenha++;
    }
    numerosenha.textContent = tamanhosenha;
    geraSenha();
}

const camposenha = document.querySelector('#campo-senha');

const letrasmaiusculas = 'abcdefghijklmnopqrstuvwxyz';
gerasenha();

function gerasenha(){

    for(let i = 0; i < tamanhosenha;i++){
        let numero6leatorio = Math.random{}*letrasmaiusculas.length;
        numeroalatorio = Math.floor(numeroalatorio);
        console.log(letrasmaiusculas [numeroalatorio]);
    }
    camposenha.value = senha;
}
