//которая принимает на вход строку и возвращает первый символ, который не повторяется нигде в строке.
//
// Например, если на входе указано «стресс», функция должна вернуть «t», поскольку буква t встречается в
// строке только один раз и встречается в строке первой.

const firstNonRepeatingLetter = (s) => {
   let t = s.toLowerCase();
   for (let x = 0; x < t.length; x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
         return s[x];
   return "";
}

console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('sTreSS'))
console.log(firstNonRepeatingLetter('uoybsuoybstzy8itzy8i8kbhl8kbhldfs7jdfs7jkofrakofrahwophwoppfmx5pfmx5ao33aao33al6yxgl6yxgwco1lwco1lg8wg8w2'))
console.log(firstNonRepeatingLetter('4rc4rcxycxlxycxlthbnthbn55m8a55m8a96yq96yq5v56a5v56amst9mmst9mxmfpkxmfpkhh9phh9ppuianpuian2huwf2huwf7'))

