/* 

function total(){
  const peraValor = document.getElementById('pera').value
  const bananaValor = document.getElementById('banana').value
  
  const frutas = [{fruta:'pera', valor:2.50}, {fruta:'banana', valor:3.50 }]
  
  const selecPera = frutas.filter(function(item)  {
    return item.valor === 2.50 
    const resutPera = (item.valor === 2.50) ** peraValor
    console.log(resutPera)
  })
  console.log(selecPera)
  const resultadoPera = document.getElementById('resultado').innerHTML= selecPera * peraValor
 
  
  
  
  
} */



function total(){
  const peraValor = document.getElementById('pera').value
  const bananaValor = document.getElementById('banana').value
  
  
  const frutas = [{fruta:'pera', valor:2.50}, {fruta:'banana', valor:3.50}]
  console.log(frutas)



  
  const selecPera = frutas.filter((item)=>{
    if(item.fruta === 'pera'){
      return item
      
    }else if(item.fruta === 'banana'){
      return item
      
    }
  })
  const resultPera=selecPera[0].valor * parseFloat(peraValor)
  const resultBanana=selecPera[1].valor * parseFloat(bananaValor)
  document.getElementById('resumo').innerHTML=resultPera
  document.getElementById('resultado').innerHTML=resultBanana

  document.getElementById('resultadoTotal').innerHTML=(resultBanana) + (resultPera)
  
  

  

}
