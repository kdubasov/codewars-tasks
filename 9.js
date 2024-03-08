// The main idea is to count all the occurring characters in a string. If you have a string like aba,
// then the result should be {'a': 2, 'b': 1}.

const count = (str) => {
   let result = {};
   for (let i = 0; i < str.length; i++) {
      if (str[i] in result) {
         result[str[i]] = result[str[i]] + 1;
      } else {
         result[str[i]] = 1;
      }
   }
   return result;
}

console.log(count('abcdaadkl'))
console.log(count('aabbxxc'))
console.log(count('abcd'))