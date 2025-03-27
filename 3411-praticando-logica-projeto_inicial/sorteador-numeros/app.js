function sorteio(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = []
    let numeros;

    for (let i = 0; i < quantidade; i++){
        numeros = sortearNumeros(de, ate);
        while(numerosSorteados.includes(numeros)){
            numeros = sortearNumeros(de, ate);
        }
        numerosSorteados.push(numeros);
    }
    let texto = document.getElementById("resultado");
    texto.innerHTML = (`<label class="texto__paragrafo">Números sorteados: ${numerosSorteados} </label>`)
    mudarStatusBotao();
}

function sortearNumeros(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mudarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar")
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    mudarStatusBotao();
}