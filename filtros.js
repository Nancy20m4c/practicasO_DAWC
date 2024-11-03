//Multiplicando por 2
const numeros = [1, 2, 3, 4];

function multiplicarPorDos(number) {
  return number * 2;
}

const resultado = filtro(numeros, multiplicarPorDos);
console.log(resultado);

//Pasar a mayusculas
const palabras = ['hola', 'mundo', 'javascript'];

function aMayusculas(palabra) {
  return palabra.toUpperCase();
}

const resultadoMayuscula = filtro(palabras, aMayusculas);
console.log(resultadoMayuscula);


//Factorial
const num = [3, 5, 4];

function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

const resultadoFactorial = filtro(num, factorial);
console.log(resultadoFactorial);