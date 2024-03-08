// Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице
// в двоичном представлении этого числа. Вы можете гарантировать, что ввод неотрицательен.
//
// Пример. Двоичное представление числа 1234 — 10011010010, поэтому в этом случае функция должна возвращать 5.

const countBits = (num) => {
   return num.toString(2).split('').filter(elem => !!Number(elem)).length
}

console.log(countBits(1)) //1
console.log(countBits(312)) //4
console.log(countBits(1234)) //5