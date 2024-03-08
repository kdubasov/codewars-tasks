//найти следующее число с целым корнем этого числа
//если у входного параметра уже целый квадрат то выбрасываем -1

// 121 --> -1
// 625 --> -1
// 114 --> 121
// 84 --> 100

const findNextSquare = (num) => {
   const squareRes = Math.sqrt(num);
   if (Number.isInteger(squareRes)) return -1;
   return Math.pow(Math.ceil(squareRes), 2)
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
console.log(findNextSquare(84))