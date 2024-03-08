// Ваша задача — создать функцию, которая может принимать в качестве аргумента любое
// неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути,
// переставьте цифры, чтобы получить максимально возможное число.

//Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const descendingOrder = (num) => {
   return Number(String(num).split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))