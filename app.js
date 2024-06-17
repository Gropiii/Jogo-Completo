let listaNumerosSorteados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log (`O número secreto é `, numeroSecreto);
let tentativas = 1;

function textosDaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1});
}

function exibirMensagemInicial() {
    textosDaTela('h1','Jogo do número secreto!');
   textosDaTela('p','Escolha um número de 1 a 10.');       
   }

   exibirMensagemInicial()

   function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (`O número secreto é `, numeroSecreto);
    console.log ('O chute foi: ', chute);
    console.log (chute==numeroSecreto);
    limparCampo();
    if(chute==numeroSecreto){
        textosDaTela('h1','Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        textosDaTela('p',`Você precisou de ${tentativas} ${palavraTentativa} para descobrir o número secreto (${numeroSecreto}).`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++
        if(chute>numeroSecreto) {
        textosDaTela('h1',`Você errou.`);
        textosDaTela('p',`O número secreto é menor que ${chute}`);
    } else{
        textosDaTela('h1',`Você errou.`);
        textosDaTela('p',`O número secreto é maior que ${chute}`);
    }
}
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * limiteLista + 1);
    let quantidadeDeNumeros = listaNumerosSorteados.length;

    if (quantidadeDeNumeros == limiteLista) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    } else {
        console.log(listaNumerosSorteados);
        listaNumerosSorteados.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

function novoJogo() {
    document.getElementById('reiniciar').setAttribute('disabled',true);
    numeroSecreto = gerarNumeroAleatorio();
    console.log (`O número secreto é `, numeroSecreto);
    limparCampo();
    tentativas=1;
    exibirMensagemInicial()
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}