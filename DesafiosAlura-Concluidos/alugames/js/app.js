function alterarStatus(id){
let alugar = document.getElementById(`game-${id}`);
let imagem = alugar.querySelector('.dashboard__item__img');
let botao = alugar.querySelector('.dashboard__item__button');


if (imagem.classList.contains('dashboard__item__img--rented')){
 imagem.classList.remove('dashboard__item__img--rented');
 botao.textContent = 'Alugar';
}
else{
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
}
if(botao.classList.contains('dashboard__item__button--return')){
 botao.classList.remove('dashboard__item__button--return');
}
else{
    botao.classList.add('dashboard__item__button--return');
}
}

