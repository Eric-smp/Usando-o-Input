function total(){
  /* const peraValor = document.getElementById('pera').value
  const bananaValor = document.getElementById('banana').value
  
  
  
  
  const resultPera=filterFruits[0].valor * parseFloat(peraValor)
  const resultBanana=filterFruits[1].valor * parseFloat(bananaValor)
  document.getElementById('resumo').innerHTML=resultPera
  document.getElementById('resultado').innerHTML=resultBanana

  document.getElementById('resultadoTotal').innerHTML=(resultBanana) + (resultPera) */

  alimentos()


}





function alimentos(){
  const frutas = [{nome:'pera', valor:3, id:0}, {nome:'banana', valor:2.50, id:1}, {nome:'manga', valor:4.50, id:2}, {nome:'melancia', valor:7, id:3}, {nome:'abacate', valor:2, id:4}, {nome:'laranja', valor:3.50, id:5} ]

  const filterFrutas = frutas.filter((fruta)=>{
    if(fruta.nome === 'pera'){
      const resultPera = document.getElementById('pera').value 
      if(resultPera){
        document.getElementById('resultado').innerHTML=  3 * parseFloat(resultPera)
      }
    }if(fruta.nome === 'banana'){
      const resultBanana = document.getElementById('banana').value
      if(resultBanana){
        document.getElementById('resultado').innerHTML= fruta.valor * parseFloat(resultBanana)
      }
    }if(fruta.nome === 'manga'){
      const resultManga = document.getElementById('manga').value
      if(resultManga){
        document.getElementById('resultado').innerHTML= fruta.valor * parseFloat(resultManga)
      }
    }if(fruta.nome === 'melancia'){
      const resultMelancia = document.getElementById('melancia').value
      if(resultMelancia){
        document.getElementById('resultado').innerHTML= fruta.valor * parseFloat(resultMelancia)
      }
    }if(fruta.nome === 'abacate'){
      const resultAbacate = document.getElementById('abacate').value
      if(resultAbacate){
        document.getElementById('resultado').innerHTML= fruta.valor * parseFloat(resultAbacate)
      }
    }if(fruta.nome === 'laranja'){
      const resultLaranja = document.getElementById('laranja').value
      if(resultLaranja){
        document.getElementById('resultado').innerHTML= fruta.valor * parseFloat(resultLaranja)
      }
    }
   


  })

  
    


  
  


}















/* 



const numeros = [2,4,6,8,10];
const promises = [];
numeros.forEach(entry => promises.push(dividePelaMetade(entry)));
Promise.all(promises)
    .then(results => results.forEach(entry => console.log(entry)))
    .catch(error => console.log(error));
 
console.log("teste");



 */




























