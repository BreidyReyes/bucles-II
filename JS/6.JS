// Escribe un programa que le pida al usuario una
// frase y un número. El programa debe imprimir
// la frase en la consola el número de veces que
// ingresó el usuario. Por ejemplo, si el usuario
// ingresó la frase Hola Mundo y el número 5, el
// programa debe imprimir Hola Mundo 5 veces


const frase = prompt("ingresa una frase bonita ;)");
const repeticiones = prompt("cuantas veces quieres repetir este mensaje?")
let i = 1;

while( i <= repeticiones) {
    console.log( frase )
    i++
}