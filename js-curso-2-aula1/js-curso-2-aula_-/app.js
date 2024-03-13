let listaDeNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Ecolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}` );
        tentativas++
        } else {
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        tentativas++;
        }
        limparCampo();
    }
}

function reiniciarJogo() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
    tentativas = 1;
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    console.log(listaDeNumeroSorteados);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    quantidadeElementosLista = listaDeNumeroSorteados.length;
    if (quantidadeElementosLista == 9) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}