function verificarParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " es un número impar.");
  }
}

function compararNumerosMayores(a, b) {
  if (a > b) {
    console.log(a + " es mayor que " + b);
  } else if (b > a) {
    console.log(b + " es mayor que " + a);
  } else {
    console.log("Ambos números son iguales.");
  }
}

function verificarMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5.");
  } else {
    console.log(numero + " no es múltiplo de 5.");
  }
}

function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

function imprimirPalabraNTimes(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

function imprimirElementosDeArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function imprimirArrayExceptoQuinto(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

verificarParOImpar(7);
compararNumerosMayores(11, 2);
verificarMultiploDeCinco(15);
imprimirNumerosHasta(11);
imprimirPalabraNTimes("Hola", 1);
imprimirElementosDeArray([1, 2, 3, 4, 5]);
imprimirArrayExceptoQuinto([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
multiplicarArrayPorNumero([1, 2, 3], 5);
