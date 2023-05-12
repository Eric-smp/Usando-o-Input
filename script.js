function result(){
const valorNota = document.getElementById('nota').value
console.log(valorNota)

const notaA= parseFloat(valorNota) >=90 && parseFloat(valorNota)<=100
const notaB = parseFloat(valorNota) >=80 && parseFloat(valorNota)<=89
const notaC = parseFloat(valorNota) >=70 && parseFloat(valorNota)<=79
const notaD = parseFloat(valorNota) >=60 && parseFloat(valorNota)<=69
const notaF = parseFloat(valorNota) >=59


if(notaA){
  document.getElementById('resultado').innerHTML= 'Você tirou A'
}else if(notaB){
  document.getElementById('resultado').innerHTML= 'Você tirou B'
}else if(notaC){
  document.getElementById('resultado').innerHTML= 'Você tirou C'
}else if(notaD){
  document.getElementById('resultado').innerHTML= 'Você tirou D'
}else{
  document.getElementById('resultado').innerHTML= 'Você tirou F'
}




}