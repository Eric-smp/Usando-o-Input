/* /* /* console.log("Olá seja bem vindo") /* Aqui é o primeiro console.log do site */

console.log(`Eric Sampaio possui ${5 + 14}`)

/* 
  Numeros

  33 inteiros

  17.5 real
  nan not number
  infinity  infinito
*/

console.log(12.5 + 33)

/* 
  Boolean

  Somente 2 valores
  true//verdadeiro
  false//falso


*/


/* 
  undefined
  indefinido


  null
  nulo
  Objeto que não possui nada dentro 
*/

/* 
  Object
  Objeto
  Propriedades / atributos
  Funcionalidade / métodos

*/

console.log({
  name:"Eric",
  idade: 19,
  andar: function(){
    console.log('andar')
  }
})

/* 
  Array (vetores)
  Uma lista
  Agrupamento de dados
  ["Eric",19]
  */
 
  console.log([
    "Leite",
    "ovos",
    2,
    3
   ])

   var name = 'Eric'

console.log(typeof name)

let age = 20
let isHuman = true 

console.log(name, age, isHuman)
console.log('O ' + name + ' possui ' + age + ' anos')

const person = {
  name: 'Eric',
  age: 19,
  weight: 88.6,
  isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos`)





/* let weight
console.log(typeof weight)

let name = 'Eric'
let age = "19"
let stars = '5.5'
let isSubscribed = true */


const student = {
  name:'Eric',
  age: 19,
  weigth: 95.38
  
}

/* console.log(`O paciente ${student.name} possui ${student.age} de idade e pesa ${student.weigth} kilos`) */
students = [
  student
]
const eric = {
  name:'Eric',
  age:20,
  weigth:74.8,
  isSubscribed: true,
}

students[1] = eric
console.log(students  )





function cratePhrases(){
  console.log("Estudar é muito bom")
  console.log('Paciência e persistência')
  console.log('Revisão é mãe do aprendizado')
  
}

cratePhrases()

console.log('Fim do programa')


//function expression
// function anonymous

//parâmetros 


const sum = function(number1, number2){
  console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos 



const sum = function(number1, number2){
  total = (number1 + number2)
  return total
  
}

let number11=10
let number22=5

/* console.log(`O primeiro numero é ${number11}`)
console.log(`O segundo numero é ${number22}`) */
console.log(`A soma é de ${sum(number11,number22)}`)
console.log(total)


let subject = 'Leite'

function createThink(){
  subject = 'Study'
  return subject
}
console.log(subject)
console.log(createThink(subject))
console.log(subject)


let subject 

function myName(subject){
  subject = 'Lucas'
  return subject

}

console.log(subject)
console.log(myName(subject))
console.log(subject)

// callback
function sayMyName(name){
  console.log(name)
}

sayMyName(
  () => {
    console.log('Estou em uma callback ')
  }
)



function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + ' está andando'
  }
}

const eric = new Person ('Eric')
const batista = new Person ('Batista')
console.log(eric.walk())
console.log(batista.walk())
console.log(eric, batista)


const pai = "Batista"
const filho = "Eric"
console.log(`${filho}, é filho do ${pai}`)

//Mudando de numero para String
const string = '123'
console.log(Number(string))

//Mudando de String para numero
const number = 145
console.log(String(number))

let word = "Paralelepipedo"
console.log(word.length)
let number= 123345
console.log(String(number).length)

let number = 4555555.3333
console.log(number.toFixed(2).replace('.', ','))

let word = "Programar é muito bacana"
console.log(word.toUpperCase('muito'))

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split('o')
console.log(myArray)

let phrase = 'Eu quero viver!'
console.log(phrase.includes('amor'))

let myArray = new Array ('a', 'b', 'c')
console.log(myArray)




/* function soma(){
  const numberOne = document.getElementById('numOne').value
  const numberTwo = document.getElementById('numTwo').value
  const soma  = numberOne + numberTwo
  if(soma){
    document.getElementById('resultado').innerHTML= parseFloat(numberOne) + parseFloat(numberTwo)
  }
  
  
}

function subtra(){
  const numberOne = document.getElementById('numOne').value
  const numberTwo = document.getElementById('numTwo').value
  const soma  = numberOne - numberTwo
  if(soma){
    document.getElementById('resultado').innerHTML= parseFloat(numberOne) - parseFloat(numberTwo)
  
}
}

function divisao(){
  const numberOne = document.getElementById('numOne').value
  const numberTwo = document.getElementById('numTwo').value
  const soma  = numberOne / numberTwo
  if(soma){
    document.getElementById('resultado').innerHTML= parseFloat(numberOne) / parseFloat(numberTwo)
}
}

function multi(){
  const numberOne = document.getElementById('numOne').value
  const numberTwo = document.getElementById('numTwo').value
  const soma  = numberOne * numberTwo
  if(soma){
    document.getElementById('resultado').innerHTML= parseFloat(numberOne) * parseFloat(numberTwo)
}

}

 */





let word = 'manipulação'
console.log(Array.from(word))









let techs = [/* techs.unshift coloca elemento no começo do array */'html', 'css', 'js' /* techs.push coloca mais um elemento do array */]
techs.push('nodejs')
techs.unshift('sql')
//techs.pop()//remove o elemento final 
//techs.shift()//remove o elemento do começo
//console.log(techs.slice(0,1))
////techs.splice()//Remove os elementos

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)



/* let number= 1;


(function(){
  console.log('alo')
})() */

//Operador Binary
/* let number = 1

console.log(number + 1) */

//Operador Unary
/* let number = 1
console.log(++number)
 */
//Operador Ternay
let number = 1
console.log(true? 'alo' : 'nada')

// new cria um novo objeto


/* let name2 = new String('Eric')
let age = new String(19)

console.log(name2, age)   */




class Pessoa {
  constructor(nome, idade, altura, peso){
    this.altura = altura
    this.nome = nome
    this.idade = idade
    this.peso = peso
  }
  apresentacao(){
    console.log(`O nome da pessoa é ${this.nome}, tem ${this.idade} anos de idade.`)
  }
}

const eric = new Pessoa('Eric', 19, 1.90, 95)
eric.apresentacao()




class Pessoa {
  constructor(nome, idade, altura, peso){
    this.altura = altura
    this.nome = nome
    this.idade = idade
    this.peso = peso
  }
  apresentacao(){
    console.log(`O nome da pessoa é ${this.nome}, tem ${this.idade} anos de idade.`)
  }
}

const eric = new Pessoa('Eric', 19, 1.90, 95)
eric.apresentacao()

let date = new Date('2020-11-17')

console.log(date.__proto__)


//typeof, mostra se o elemento é boolean, string ou number
//delete, você deleta um elemento da variável
const person = {
  name2: 'Eric',
  age: 19,
  nascimento: 2003 
}
delete person.name2
delete person.nascimento
console.log(person)


/* 

function calcator(){
  const number1 = document.getElementById('numOne').value
  const number2 = document.getElementById('numTwo').value
  let result = number1 + number2
  const numeros = document.getElementById('numeros').innerHTML=`Esse é o primeiro numero ${number1}, esse é o segundo numero ${number2}`

  console.log(numeros)
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



} */ */ */ */


/* let resto 
resto = 10 % 
console.log(resto) */

/* let increment = 0
increment++
increment++
console.log(increment) */

/* let decremente = 0
decremente--
decremente--
console.log(decremente) */
/* exoponencial
console.log(3 ** 2) */

// calcular entre parenteses

/* let total = (2 + 3) * 5
console.log(total) */



// operadores de comparação 

/* let one = 1
let two = 2 */
// == para ver se o numeor é igual a que está na variável
/* console.log(two == 1)
console.log(one == "1") */

// != diferente 
/* console.log(one != two)
console.log(two != 2)
console.log(two != 1) */





/* let one = 1
let two = 2 */

// === estritamente igual a 
/* console.log(one === 1)
console.log(one === '1') */


/* function total(){
  const macaValor = document.getElementById('maca').value
  const bananaValor = document.getElementById('banana').value
  const laranjaValor = document.getElementById('laranja').value
  



  const maca = parseFloat(macaValor) * 0.50
  const banana = parseFloat(bananaValor) * 2.50
  const laranja = parseFloat(laranjaValor) * 2
  console.log(maca + banana + laranja)
  document.getElementById('resumo').innerHTML= `Maças ${macaValor}, Bananas ${bananaValor}, Laranja ${laranjaValor}`
  document.getElementById('resultado').innerHTML= `Valor do pedido R$ ${maca+banana+laranja}`





} */


/* let pao = true
let queijo = false
 */
// AND  &&
/* console.log(pao && queijo ) */

// OR ||
//console.log(pao || queijo)

// NOT !
/* console.log(!pao)
 */


/* let pao = true
let queijo = true */
// ? então
// : senão
/* const niceBreakFast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakFast) */


/* let age = 20
const canDrive = age >= 18 ? 'can drive' : 'cannot drive'

console.log(canDrive) */




/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/
/* console.log(0 ? 'verdadeiro' : 'false') */

/* console.log( ? 'verdadeiro' : 'false') */





// De cima para baixo, do mais importante ao menos importante.

/* * grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=  */













//.textContent = Editar texto da pagina 




























































































































































































