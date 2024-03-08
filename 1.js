//"the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== '_' && str[i] !== '-') {
         if (i !== 0 && str[i - 1] === '_' || str[i - 1] === '-') {
            newStr += str[i].toUpperCase()
         } else {
            newStr += str[i]
         }
      }
   }
   return newStr
}

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))
console.log(toCamelCase('The_Stealth-Warrior'))