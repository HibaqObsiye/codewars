// //When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    let stringSplit = string.split("")
   let vowels = ["a", "e", "i", "o", "u"]
 
   for(let i = 0; i < stringSplit.length; i++){
     if(vowels.includes(stringSplit[i])){
       stringSplit[i] = stringSplit[i].toUpperCase()
     }
   }
   return stringSplit.join("")
}