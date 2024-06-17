let listaNumerosSorteados = [];
let numeroMaximo;
function escolherDificuldade(){
    var dificuldadeEscolhida = nivel(prompt('Escolha a dificuldade (1,2,3)'));
    function nivel(dificuldade) {
        console.log (`A dificuldade escolhida foi ${dificuldade}`);
        if (dificuldade==1){
         numeroMaximo=10;  
        } else {
        if (dificuldade==2){
            numeroMaximo=100; 
        } else {
            if (dificuldade==3){
            numeroMaximo=1000; 
        }}}  
    }
};
escolherDificuldade();

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
   textosDaTela('p',`Escolha um número de 1 a ${numeroMaximo}.`);  
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
    let numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumeros = listaNumerosSorteados.length;

    if (quantidadeDeNumeros == numeroMaximo) {
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
    dificuldade = escolherDificuldade();
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
