// Escribe un programa para la consola que le
// pida al usuario dos números e imprima en la
// consola los números en ese rango. Por
// ejemplo, si el usuario ingresa 5 como primer
// número y 10 como segundo número, el
// programa debe imprimir: // 5, 6, 7, 8, 9, 10 .

const numero1 = prompt("ingrasa el primer numero por favor");
const numero2 = prompt("ingresa el siguiente numero ;)");
let i = numero1;

while( i <= numero2 ) {
    console.log( i )
    i++
}

