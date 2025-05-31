// Escribe un programa que pida al usuario su
// año de nacimiento y nombre e imprime su
// edad actual en la consola con la frase Hola X,
// grandioso! Tienes X años. Asume que el
// año actual es 2025 y el usuario ingresa 2000,
// el programa debe imprimir en la consola: Hola
// Juan, grandioso! Tienes 25 años

const nombre = prompt("Ingresa tu nombre.....");
const fechaDeNacimiento = prompt("ingresa el año de nacimiento. Ejemplo.... 2019");

const fechaNacimiento = Number(fechaDeNacimiento)
const año =   2025 - fechaNacimiento;

console.log(`hola ${nombre}, Grandioso! Tienes ${año} años`);
