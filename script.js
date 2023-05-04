
function calcator(){
  const number1 = document.getElementById('numOne').value
  const number2 = document.getElementById('numTwo').value
  let result = number1 + number2
 

  if(result){
    document.getElementById('resultado').innerHTML= parseFloat(number1) - parseFloat(number2)
  }

  if(result){
    document.getElementById('resultado1').innerHTML= parseFloat(number1) + parseFloat(number2)
  }

  if(result){
    document.getElementById('resultado2').innerHTML= parseFloat(number1) * parseFloat(number2)
  }

  if(result){
    document.getElementById('resultado3').innerHTML= parseFloat(number1) / parseFloat(number2)
  }



}