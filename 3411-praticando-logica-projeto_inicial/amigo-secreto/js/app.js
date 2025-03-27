let amigos = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (amigo==''){
        alert('informe um nome');
        return;

    }
    if(amigos.includes(nomeAmigo)){
        alert('Voce ja colocou este amigo na lista!!!')

    }
    else
    { 
        amigos.push(nomeAmigo);
        let amigosIncluidos = document.getElementById('lista-amigos')
        amigosIncluidos.textContent = amigos;
    }
        
}

function sortear(){
    if(amigos.length%2 == 0){
        embaralhar(amigos);
        let sorteio = document.getElementById('lista-sorteio');
        for(let i = 0; i < amigos.length;i++){
            
            if (i == amigos.length -1){
                sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' - - >' + amigos[0] + '<br>'

            }else{
                  sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' - - >' + amigos[i + 1] + '<br>'

            }
        }
        }
    else{
        alert('Para o sorteio ficar correto é necessario um numero par de amigos!')
    }
 
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('nome-amigo').textContent = " ";
    document.getElementById('lista-amigos').innerHTML = " ";
    document.getElementById('lista-sorteio').innerHTML= " ";

}