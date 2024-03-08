// Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после переданного в
// качестве параметра. Напомним, что целочисленный совершенный квадрат — это целое число n такое, что sqrt(n)
// также является целым числом.
//
// Если параметр сам по себе не является точным квадратом, то должно быть возвращено -1. Вы можете предположить,
// что параметр неотрицательный.

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

const findNextSquare = (num) => {
   const squareRes = Math.sqrt(num);
   if (!Number.isInteger(squareRes)) return -1;
   return Math.pow(squareRes + 1, 2)
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))