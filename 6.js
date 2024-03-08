// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const accum = (str) => {
   let result = [];
   for (let i = 0; i < str.length; i++) {
      result.push(str[i].toUpperCase() + Array.from({ length: i }).map(() => str[i].toLowerCase()).join(''));
   }
   return result.join('-');
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))