// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (str) => {
   if (!str) return str;
   let result = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === str[i]) {
         result += ' ' + str[i];
      } else {
         result += str[i]
      }
   }
   return result;
}

console.log(solution('camelCasing'))
console.log(solution('identifier'))
console.log(solution(''))