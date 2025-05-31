// Completa el siguiente programa para imprimir
// los números que sean mayores a 10.
// const nums = [1, 23, 5, 8, 40, 12, 2,
// 67, 24, 9, 39]

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
let i = 0;

while(i < nums.length) {
    if(nums[ i ] >= 10
    ) {
        console.log( nums[ i ])
    }
    i++;
}
