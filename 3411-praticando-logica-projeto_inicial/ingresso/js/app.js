let pista = 100
let superior = 200
let inferior = 400
let textoInferior = document.getElementById('qtd-inferior').textContent = 400;
function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value
    let quantidade = document.getElementById('qtd').value;
    if (quantidade == 0){
        alert('Selecione a quantidade de ingressos desejados!');
    }
    else{
        
        
        if(ingresso == 'superior'){
            if(quantidade > superior){
                alert('Não temos a quantidade de ingressos desejada, Tente novamente mais tarde ou selecione outro ingresso.')
            }
            else{
                superior = superior - quantidade;
                let textoSuperior = document.getElementById('qtd-superior');
                textoSuperior.textContent = `${superior}`

            }
        
        }
        else{ if(ingresso == 'pista'){
            if(quantidade > pista){
                alert('Não temos a quantidade de ingressos desejada, Tente novamente mais tarde ou selecione outro ingresso.')
            }
            else{
                pista = pista - quantidade;
                let textoPista = document.getElementById('qtd-pista');
                textoPista.textContent = `${pista}`

            }
          
        }
        else{

            if(ingresso == 'inferior'){
                if(quantidade > inferior){
                    alert('Não temos a quantidade de ingressos desejada, Tente novamente mais tarde ou selecione outro ingresso.')
                }
                else{
                    inferior = inferior- quantidade;
                    let textoInferior = document.getElementById('qtd-inferior');
                    textoInferior.textContent = `${inferior}`


                }
                
            }
            
        }
    }
   
  }            
}