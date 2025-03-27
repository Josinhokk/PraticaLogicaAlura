let totalGeral = 0
limpar();
function limpar(){
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = '';
totalGeral = 0
}

function adicionar(){    
  let produtos = document.getElementById('produto').value;
  let nomeProduto = produtos.split('-')[0];
  let valorUnitario = produtos.split('R$')[1];
  let quantididade = document.getElementById('quantidade').value;

  //.value pega o valor 
  let preco = valorUnitario * quantididade;
  
  let carrinho = document.getElementById('lista-produtos');
  if(quantididade != 0){
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantididade} x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
  }else {
    alert('Erro coloque a quantidade desejada!')
  }
 
  
  totalGeral = totalGeral + preco
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`
  document.getElementById('quantidade').value = 0;
  }
