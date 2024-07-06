function scramble(str1, str2) {
   let copyStr = str1

   for (let i = 0; i < str2.length; i++) {
      if (copyStr.includes(str2[i])) {
         const index = copyStr.indexOf(str2[i])
         copyStr = copyStr.slice(0, index) + copyStr.slice(index + 1, copyStr.length)
      } else {
         return false
      }
   }

   return true
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('scriptjavx', 'javascript'))
console.log(scramble('javscripts', 'javascript'))