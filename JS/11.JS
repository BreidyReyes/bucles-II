// Completa el siguiente programa e imprime la
// cantidad de unos (1) que haya en el arreglo:
// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1,
// 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let i = 0;
let suma = 0;


while (i < nums.length) {
    suma = suma + nums[i]
    i++
}

console.log(`la suma de todo es: ${suma}`);